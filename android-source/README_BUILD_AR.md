# SAVOURY — مشروع Android جاهز للبناء

هذا المجلد مخصص لتحويل واجهة SAVOURY الحالية إلى تطبيق Android باستخدام Capacitor.

## بيانات التطبيق
- الاسم: SAVOURY
- Package ID: com.savoury.platform
- الواجهة: Arabic RTL
- مجلد الواجهة: www/

## استخراج APK
1. ثبّت Node.js وAndroid Studio وAndroid SDK.
2. افتح هذا المجلد في جهاز البناء.
3. نفّذ:
   npm install
   npx cap add android
   npx cap sync android
   cd android
   ./gradlew assembleDebug
4. ملف APK سيكون عادة داخل:
   android/app/build/outputs/apk/debug/app-debug.apk

## ملاحظة مهمة
الواجهة الحالية مرتبطة بالـAPI الموجود في مشروع SAVOURY الأساسي. لكي يعمل تسجيل الدخول والبيانات المركزية من الهاتف، يجب ضبط عنوان السيرفر/API الحقيقي بدل localhost قبل الإصدار النهائي.

## الإصدار النهائي
بعد اختبار الاتصال بالسيرفر يمكن استخراج AAB للنشر على Google Play:
./gradlew bundleRelease
