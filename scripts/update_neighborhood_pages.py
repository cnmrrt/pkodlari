import os
import re

def update_neighborhood_pages(root_dir):
    pages_dir = os.path.join(root_dir, 'pages')
    
    # Walk through the pages directory
    for dirpath, dirnames, filenames in os.walk(pages_dir):
        if '[neighborhood].vue' in filenames:
            file_path = os.path.join(dirpath, '[neighborhood].vue')
            
            # Determine City Name
            relative_path = os.path.relpath(dirpath, pages_dir)
            path_parts = relative_path.split(os.sep)
            
            city_segment = path_parts[0]
            
            if city_segment == '[city]':
                city_name_expr = "{{ titleCase(cityItem.name) }}"
            else:
                # Basic capitalization for folder names, special cases can be added if needed
                city_name_expr = city_segment.capitalize()
                if city_name_expr == 'Istanbul': city_name_expr = 'İstanbul'
                if city_name_expr == 'Izmir': city_name_expr = 'İzmir'
                if city_name_expr == 'Agri': city_name_expr = 'Ağrı'
                # Add more special cases if we encounter them, but 'Adana', 'Ankara' etc are fine.

            print(f"Processing: {file_path} (City: {city_name_expr})")
            
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Check if already added to avoid duplication
            if 'nerenin posta kodu?' in content:
                print(f"Skipping {file_path} - Already updated.")
                continue

            # HTML to inject
            # Using 'ne suffix logic is complex in pure static HTML without helper. 
            # The user requested "{{ titleCase(neighItem.name) }}'ne" format.
            # We will use distinct Apostrophe for proper Turkish grammar if possible, but 'ne is what was asked.
            # Actually, standard suffixes depend on the last vowel. 
            # For now, I will use "'ne" as a generic suffix placeholder, or just the apostrophe and let the user know?
            # Request was: "{{ titleCase(neighItem.name) }}'ne formatı kullanılabilir"
            # So I will use exactly that.
            
            html_block = f"""
<div class="mt-8 text-center mb-8">
    <h2 class="text-xl font-bold text-slate-900 mb-2">{{{{ neighItem.zipCode }}}} nerenin posta kodu?</h2>
    <p class="text-slate-600">{{{{ neighItem.zipCode }}}} posta kodu {city_name_expr} {{{{ titleCase(districtItem.name) }}}} {{{{ titleCase(neighItem.name) }}}}'ne aittir.</p>
</div>"""
            
            # Find the last closing div of the main container.
            # The main container starts with <div v-if="isValid" ...>
            # We want to insert this block BEFORE the closing tag of that container.
            # A robust way is to look for the map section or the end of the `v-if="isValid"` block.
            # In the provided files, the structure ends with:
            # <div v-if="neighItem.mapCode" ...> ... </div>
            # </div> <!-- End of isValid -->
            # <div v-else ...>
            
            # Let's search for the line containing `v-else class="max-w-2xl` which marks the start of the else block.
            # The closing div of the if block should be just before that.
            
            lines = content.split('\n')
            insert_line_index = -1
            
            for i, line in enumerate(lines):
                if '<div v-else class="max-w-2xl' in line:
                    # The closing div of the 'if' block is usually the non-empty line before this.
                    # Let's scan backwards from i-1
                    for j in range(i-1, -1, -1):
                        if lines[j].strip() == '</div>':
                            insert_line_index = j
                            break
                    break
            
            if insert_line_index != -1:
                lines.insert(insert_line_index, html_block)
                new_content = '\n'.join(lines)
                
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Updated {file_path}")
            else:
                print(f"Could not find injection point for {file_path}")

if __name__ == "__main__":
    update_neighborhood_pages('/Users/mac/Desktop/pkodlari')
