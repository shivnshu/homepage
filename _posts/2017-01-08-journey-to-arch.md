---
layout: post
title: Journey from Windows to Arch Linux
---
Windows, the most popular operating system, works well for the day-to-day activities but is of little help when it comes to programming and development.  
Inspired by seniors, I took my first step towards using Ubuntu, the most popular linux, as the host operating system about a year ago. It seemed very uncomfortable at first to use this not-so-good-looking OS. But overtime, the simplicity and easeness of use overweighted the weird looking UI. Various open-source tools and extensions helped me to get rid of so-seemed ugly look(_which I later discovered was the real beauty_).  

As my voyage of exploring computers continued, I fell in love with Ubuntu(_which really was the love for linux_). Motivated by my old-interest in Security, I tried installing some pentesting tools in it, but it failed badly as I was many a times left with many broken packages. Then I decided to use Kali Linux, the most popular linux for pentesters.  

Kali Linux installation became my first dirty and time consuming installation. At that time, it had some problems with its Grub bootloader installation when dual booted with Windows(_ah, I didn't mention, I had to always have Windows in one partition, Inventor Stuff_ 🙁) but, my not-leaving attitute motivated me to try again and again but I failed. Then I got a idea of Triple booting. I installed Ubuntu in a partition and Kali in another without any bootloader, went to Ubuntu and updated grub, thus got all three entries like charm.  
I used Kali as my host OS for the next 2 months, playing with its awesome set of tools. Then, I heard of LFS, Arch and Gentoo. At first, I was too afraid to try it on host system, so I used Virtual Box. But I was brave enough to try LFS on my host sytem, don't know why. Installing LFS increased my confidence and made me habitual of sitting in front of computer and just praying that nothing goes wrong.  

Finally, I decided to install Arch on my host system. I deleted every partition on my hard disk including EFI partition, and then made partitions one by one. After about 4 hours of following installation guide and dealing with problems, I was with my newly installed OS with awesome Desktop Environment(GNOME). Later, I had to install windows in another partition( _Again Office Stuff_ ) and deal with the great Windows bootloader overwriting skills.

####Why Arch Linux?
Why not [Gentoo](https://www.gentoo.org/)? I have used Gentoo for some time, and was impressed by its documentation. The concept of compiling the package that you want to use and customising it using something called [USE flags](https://wiki.gentoo.org/wiki/USE_flag), seems to be very exciting. But, it consumes too much time( _my laptop is not that fast_ ). It took me 5 hours just to install it. Taking in account the limitation of time and risk associated with compiling packages, I think Arch Linux is good enough for me to be used as my host OS at this time. In future, I hope, I will be using Gentoo and appreciating its beauty of concept.
