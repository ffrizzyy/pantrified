from PIL import Image, ImageDraw

S = 1024
img = Image.new("RGB", (S, S), "#8aa624")
d = ImageDraw.Draw(img)
cream = "#fffff0"
pale = "#dbe4c9"
amber = "#fea405"

# bowl
d.pieslice([260, 470, 764, 810], 0, 180, fill=cream)
# rim
d.rounded_rectangle([232, 444, 792, 512], radius=34, fill=cream)
# steam
for cx, cy, r in [(372, 360, 26), (512, 320, 30), (652, 360, 26)]:
    d.ellipse([cx - r, cy - r, cx + r, cy + r], fill=pale)
# garnish
d.ellipse([636, 556, 716, 636], fill=amber)

img.resize((512, 512), Image.LANCZOS).save("public/icon-512.png", optimize=True)
img.resize((192, 192), Image.LANCZOS).save("public/icon-192.png", optimize=True)
print("icons written")
