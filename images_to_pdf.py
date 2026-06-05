from PIL import Image

image1_path = r"C:\Users\Monish\.gemini\antigravity\brain\972fd8cd-bfa0-46e7-ae07-8f0eb45ec1f4\media__1780638821318.png"
image2_path = r"C:\Users\Monish\.gemini\antigravity\brain\972fd8cd-bfa0-46e7-ae07-8f0eb45ec1f4\media__1780638835903.png"

image1 = Image.open(image1_path)
image2 = Image.open(image2_path)

im1 = image1.convert('RGB')
im2 = image2.convert('RGB')

im1.save(r"public\resume.pdf", save_all=True, append_images=[im2])
print("PDF created from images successfully.")
