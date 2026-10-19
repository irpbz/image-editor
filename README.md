# Smart Image Editor

ویرایشگر حرفه‌ای تصاویر با قابلیت‌های هوش مصنوعی.

## ویژگی‌ها

- فشرده‌سازی با Compressor.js
- تغییر سایز با حفظ نسبت ابعاد
- کراپ با Cropper.js
- تغییر اندازه بوم
- ویرایش پیشرفته (واترمارک، فیلتر، چرخش)
- تبدیل فرمت (JPEG, PNG, WebP, AVIF, GIF)
- حذف پس‌زمینه
- پشتیبانی از فارسی، انگلیسی، عربی
- تم تاریک/روشن
- کاملاً آفلاین با Fallback خودکار
- Service Worker برای کش

## اجرا

۱. اسکریپت ساخت پروژه را اجرا کنید:

    python generate_project.py

۲. وارد پوشه پروژه شوید و سرور محلی راه‌اندازی کنید:

    cd image-editor
    python -m http.server 8000

۳. مرورگر را باز کنید: http://localhost:8000

## ساختار پروژه

    image-editor/
    ├── index.html
    ├── sw.js
    ├── README.md
    ├── .gitignore
    └── assets/
        ├── css/
        ├── js/
        └── webfonts/

## Fallback خودکار

در index.html هر کتابخانه ابتدا از CDN بارگذاری می‌شود و در صورت خطا
(onerror) به نسخه محلی در پوشه assets سوئیچ می‌کند.

## مجوز

MIT
