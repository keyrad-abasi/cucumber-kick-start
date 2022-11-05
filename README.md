<div dir="rtl">

این دستورات رو به ترتیب اجرا کنید:

1. `yarn`
2. `yarn build`
   - این دستور درستی syntax مربوط به Gherkin رو چک میکنه
3. `yarn test`
   - تست ها رو توی کنسول اجرا میکنه
   - تو فولدر `tests\reports` یه فایل با پسوند json ایجاد میکنه که نحوه ی اجرای تستها و موفقیت آمیز بودن یا نبودن اونها رو تو ساختار json خلاصه کرده
4. `yarn report`
   - تو فولدر `tests\reports` یه فایل با پسوند html ایجاد میکنه که گزارش نحوه ی اجرای تستها و موفقیت آمیز بودن یا نبودن اونها رو به صورت چارت خلاصه میکنه
   - این فایل رو توی browser باز میکنه
5. گزارش ایجاد شده تو گام قبل (فایلی با پسوند html) برای اجرا شدن نیاز به jquery و bootstrap داره که چون از CDN استفاده کرده ممکنه در مواقع فیلتر شدن کار نکنه بنابراین اون دو خط لود اسکریپت ها رو به این صورت تغییر بدید و گزارش رو توی browser رفرش کنید (در صورت نیاز cache تون رو هم خالی کنید)

**قبل تغییر**:

<div dir="ltr">

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script src="https://netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>
```

</div>

**بعد تغییر**:

<div dir="ltr">

```html
<script src="../../node_modules/jquery/dist/jquery.min.js"></script>
<script src="../../node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
```

</div>

</div>
