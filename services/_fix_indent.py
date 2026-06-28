import re, os, sys

base = "/Users/chakripyda/Desktop/lahari/services"
dirty = ["land-disputes.html", "cybercrime.html", "money-recovery.html",
         "rental-disputes.html", "wills-trusts.html", "legal-notice-drafting.html"]

for fn in dirty:
    fp = os.path.join(base, fn)
    with open(fp, "r") as f:
        content = f.read()

    # Fix process steps indentation using regex
    # Step 1: Fix the opening of each step - ensure 8-space indent for the div
    content = re.sub(
        r'^(\s*)<div class="svc-process-step fade-in fade-in-d\d+">',
        '        <div class="svc-process-step fade-in fade-in-d\\g<NUM>">',
        content,
        flags=re.MULTILINE
    )

    # Actually, let me take a different approach - rebuild the process section
    # Extract the process section
    proc_match = re.search(
        r'(<div class="svc-process-steps">)(.*?)(</div>\s*</div>)',
        content,
        re.DOTALL
    )

    if proc_match:
        proc_content = proc_match.group(2)

        # Extract individual steps
        step_pattern = r'(<div class="svc-process-step (?:fade-in )?fade-in-d\d+">)(.*?)(</div>)\s*(</div>)'
        steps = list(re.finditer(step_pattern, proc_content, re.DOTALL))

        rebuilt_steps = []
        for s in steps:
            opening = s.group(1)
            inner = s.group(2)
            closing_step = s.group(3)
            closing_content = s.group(4)

            # Normalize the inner content
            # Extract h4, p, step-number
            num_match = re.search(r'<span class="step-number">(\d+)</span>', inner)
            h4_match = re.search(r'<h4>(.*?)</h4>', inner, re.DOTALL)
            p_match = re.search(r'<p>(.*?)</p>', inner, re.DOTALL)

            if num_match and h4_match and p_match:
                step_num = num_match.group(1)
                h4_text = h4_match.group(1).strip()
                p_text = p_match.group(1).strip()

                rebuilt = (
                    f"        {opening}\n"
                    f"            <span class=\"step-number\">{step_num}</span>\n"
                    f"            <div class=\"step-content\">\n"
                    f"              <h4>{h4_text}</h4>\n"
                    f"              <p>{p_text}</p>\n"
                    f"            </div>\n"
                    f"          </div>"
                )
                rebuilt_steps.append(rebuilt)

        if rebuilt_steps:
            new_proc = '<div class="svc-process-steps">\n' + "\n".join(rebuilt_steps) + '\n        </div>'
            content = content[:proc_match.start()] + new_proc + content[proc_match.end():]

    # Fix benefits indentation
    ben_match = re.search(
        r'(<div class="svc-benefits">)(.*?)(</div>\s*</div>)',
        content,
        re.DOTALL
    )

    if ben_match:
        ben_content = ben_match.group(2)
        # Extract benefit items
        ben_items = re.findall(r'(<div class="svc-benefit">.*?</div>\s*</div>)', ben_content, re.DOTALL)
        if ben_items:
            rebuilt_ben = []
            for item in ben_items:
                # Normalize to 10-space indent
                normalized = re.sub(r'^\s*', '          ', item, flags=re.MULTILINE)
                rebuilt_ben.append(normalized.strip())
            new_ben = '        <div class="svc-benefits">\n' + "\n".join(rebuilt_ben) + '\n        </div>'
            content = content[:ben_match.start()] + new_ben + content[ben_match.end():]

    with open(fp, "w") as f:
        f.write(content)
    print(f"{fn}: fixed")

print("Done!")
