import os
from PIL import Image

def process_image(src, dest, size):
    try:
        with Image.open(src) as img:
            img = img.resize(size, Image.Resampling.LANCZOS)
            img.save(dest, 'WEBP')
            print(f"Processed {src} -> {dest} (Size: {size})")
    except Exception as e:
        print(f"Error processing {src}: {e}")

public_dir = r"c:\Users\User\Documents\A Hotelly\hotelly-landing-page\public"

process_image(os.path.join(public_dir, "hotelly-concierge.jpg"), os.path.join(public_dir, "hotelly-concierge.webp"), (662, 662))
process_image(os.path.join(public_dir, "icon.png"), os.path.join(public_dir, "icon.webp"), (105, 105))
process_image(os.path.join(public_dir, "hotelly.png"), os.path.join(public_dir, "hotelly.webp"), (219, 70))
