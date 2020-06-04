---
title: 'PWA support on mobile and desktop in 2020'
author: 'Arthur Poot'
github: arthup1
twitter: arthurpoot
topic: pwas
bio: Digital Marketing Analyst and Business Developer
description:
og:
  image: /assets/images/posts/2020-06-05-pwa-features-2020-comparison/og-image.png
---

PWAs have evolved rapidly over the past few years and are now supported better
than ever. In the past 2 years, Microsoft and Samsung have joined Google in the
quest to actively support and promote PWAs. Since early 2020, Apple seems to
have realized that not all apps belong in the App Store. With the recent release
of iOS 13, most basic PWA features are now finally fully supported on iPads and
iPhones.

There are still limitations for some operating systems (OS) and browsers, so
when you are considering building a Progressive Web App (PWA) it is important to
take this in mind. That's why we made this overview.

<!--break-->

## The state of PWAs in 2020 per OS

![PWA support per operating system (iOS vs Android vs macOS, windows)](/assets/images/posts/2020-06-05-pwa-features-2020-comparison/infographic.png#@900-1800)

### Which devices support PWAs?

The answer to that question depends largely on the browser and how you define
what a PWA is. Almost all browsers in use support the basic functionality of
PWAs: offline capability. 94.28% of people worldwide are using a browser version
that supports offline apps through service workers (see source).

### Which devices allow installation of PWAs?

A PWA only blends in with native apps downloaded from an app store if it has an
app icon on the user’s home screen or desktop. Installing a PWA on your home
screen or desktop is now possible on almost any device, except for wearables and
TVs.

On mobile devices the user experience of installing PWAs varies widely. It
ranges from downloading a PWA from Google's Play Store like a native app, to
opening the options menu and clicking 'add to home screen' on iOS devices with a
Safari browser.

Installing PWAs on desktop devices is widely supported as well, but not that
common yet. Chrome on Windows and macOS now offers the possibility to install
apps in a seamless way. On Windows and ChromeOS you can even download them
straight from the Microsoft store and Play Store. Maybe these developments will
increase the adoption of desktop PWAs.

### What native hardware features are accessible by PWAs?

Mobile devices are packed with sensors. There are accelerometers, gyroscopes to
detect the direction and movement of the device, which could be handy for
certain games or detecting screen rotation. Or GPS to provide more accurate
location data than IP addresses. Android allows access to almost all its
hardware, from enabling and disabling bluetooth to GPS. On the other hand, Apple
has been very protective of PWAs accessing hardware or app context. See the
table above for the full list.

On the desktop, native hardware features are mostly limited to the harddrive,
camera and microphone as well as geolocation. Like any browser or app, it neatly
prompts the user to give or block access to the hardware. There just aren't that
many native sensors in a desktop device, except hardware that plugs directly
into the OS environment (e.g. bluetooth headphones, harddrives, or usb mouses).

### What native software features are accessible by PWAs?

For a PWA to be fully indistinguishable from a native app, it needs to blend in
with the operating softwares native user experience. For example, native push
notifications, keyboard shortcuts and gestures give that native feeling.

On mobile devices most basic software features are now supported, such as the
'swipe back' and 'switch-app' gestures. Both Android and iOS, also allow
auto-filling credentials and easy payment options like Apple Pay and Android
Pay.

In terms of native software features, desktops are limited to what a browser is
allowed to do. Chrome supports push notifications on macOS, just like most
browsers on Windows PCs.

## Comparing PWA features

The infographic above shows an overview of supported features, but before you
start comparing it is good to answer the following questions;

### Which OS does your target audience use?

Each OS has different users. Designers, developers and the youth use macOS,
while employees of enterprises spend most of their time on Windows PCs. iOS is
not as big as Android. Only in the US more than 20% are on iPhones and iPads. So
it really depends on what audience you try to serve. The best way to find out on
which device your users are is to look in Google Analytics under the Audience
tab and then click Technology.

### Do I really need this feature? If so, is there a workaround?

The lack of support for Push Notifications on iOS devices is an often heard
argument for building a Native Application over a PWA. Only around 55% of all
users allow push notifications and the opening rate is circa 50%. So only if you
need instant actions of users with high frequency (like with messaging apps),
you would need push notifications. But for the rest, text messages, email or
in-app notifications are perfectly suitable.

## Conclusion

PWA are not the future, they are ready today.

PWAs can do a lot more than 2 years ago and the capabilities are still improving
rapidly. Google, Apple, and Microsoft are prioritising PWA support more than
ever. The basic features of PWAs, such as offline capacity and installability,
are supported by almost all mobile and desktop devices in use today. Only some
native features are still not supported, especially on iOS devices. However, do
you really need those native features? If so, is there a workaround that is as
useful or even better than to achieve the same goal?