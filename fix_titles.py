import re
import random

with open('src/features/gallery/data.ts', 'r', encoding='utf-8') as f:
    content = f.read()

random.seed(42)
titles = ['Historic Moment', 'Training Session', 'Championship Run', 'Team Gathering', 'Track Event', 'Field Event', 'Athletic Meet', 'Campus Memories', 'Coaching Session', 'Morning Practice']

def replacer(m):
    prefix = m.group(1)
    title = m.group(2)
    
    # Check if title looks like a filename, number, or obscure code
    if re.match(r'^([0-9]+|IMG|DSC|C00|2000S|1ST)', title, re.IGNORECASE):
        title = random.choice(titles)
    else:
        title = title.replace('-', ' ').replace('_', ' ').title()
        
    return prefix + "'" + title + "'"

# Matches createMockMedia('img_1', '/images/path.jpg', 'TITLE', {
content = re.sub(r"(createMockMedia\([^,]+,\s*['\"][^'\"]+['\"],\s*)['\"]([^'\"]+)['\"]", replacer, content)

with open('src/features/gallery/data.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print('Updated data.ts')
