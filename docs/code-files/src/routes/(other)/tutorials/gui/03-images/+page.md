<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# 3. Images
This tutorial will teach you how to display images in your BagaWork app.




## What is an image?
An image is a file that contains information about which color each pixel in the image should have. This information can be stored in many different ways, so there exists different type of image files:

* If you take a photo with a camera, you often get a file with the file extension `.jpg` or `.jpeg`, and that indicates the file is stored in the JPEG format
* If you want to have an image with a transparant background, you might end up with an image stored in the PNG format, indicated by the file extension `.png`
* If you want to have an image that is animated (something in the image changes with time), you might end up with an image stored in the GIF format, indicated by the file extension `.gif`
* Etc.

On a webpage, an image can look like this:

<p style="text-align: center;">
	<img src="/smiley.png" alt="Example of an image." title="Example of an image">
</p>



## How to make an image available to a BagaApp
Currently, a BagaApp itself can't contain images, but it can display images that are stored on the web. So, if you want to show an image in your BagaApp, that image must be available on the web. All images you can see on websites you visit in your web browsers are images available on the web.

Each image on the web has its own unique identifer. That identifier is called the *Uniform Resource Identifier* (URL), sometimes referred to as the image's *link* or the image's *address*. In a web browser, when you see an image on a webpage, you can often right click on that image and in the apperaing menu select an option like `Copy Image Link`/`Copy Image Address` (it differs in different web browsers) to copy the image's URL.

::: tip Example

On a laptop/desktop computer, if you right click the smiley image above, and then select the option `Copy Image Link`/`Copy Image Address`, then you have copied the URL of that image. If you then paste that URL in a text field somewhere, you can see what the URL of that image is. In this case, the URL is the following:

```
https://bagawork.com/smiley.png
```

This URL indicates that the image is in PNG format, but not all URLs reveal such information, so an image URL does not have to end with `.png`, `.jpeg`, or `.gif`, etc.

:::

::: warning Legal issues

It is illegal to simply use images that are hosted on the web by others in your own BagaWork apps. There are 2 things you need to think about:

1. **Copyright**\
The one who has created an image owns the copyright to that image, and others may not use or create copies of that image without permission to do so from the copyright holder. Sometimes the copyright holder releases a license to the image, and the license indicates what others are allowed to do with that image (use it, edit it, etc.). So to legally use an image created by someone else, you must have permission to use it from the person who created it, either by asking that person for permission, or by finding the image's license that states you are free to use it
2. **Hosting**\
Images available on the web are stored on servers on the Internet. This costs money. So, if Alice stores an image on her server because she uses that image on her website, that does not mean others may use that image from Alice's server on their own websites/apps, because each time their website/app fetches that image, Alice needs to pay some money for transferring that image from her server to your website/app

In practice, while learning programming, it's usually no problem to use whichever image you can find on the web (because you retrieve the image only a few times), but it's definitely not OK to use an image without permission in a real app, where there will be multiple users. In these cases, you need to host the image on the web yourself (learn more about that further down in this tutorial).

:::





## How to display an image in a BagaApp
To display an image in a BagaApp, use the GUI component `Image`, and pass the URL of the image as a string to the configuration method `url()`.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNrFUk1Lw0AQ/SvLXExgSb8oSC6SikgPiqigYoWsyaQtbnaX3QlaSv67G2OrKVXqyUPCTGbevDdvsgZhDMRryHSOEEMmhXPsYpUYw/CNUOWO+Xg9UzNqnsyiILwhYelKzDEI2wpZpMoqti00X+sWVEPNodAyR+sgflzDMod4wEGJsmH8gAAHXRQO6R7i/iZ+8HH9xMH4eR1kO2zaJh3hW/6t+CbZUX9eLXd1T0vfFlVWBumCyLi413sWc/Gq7UuU6bLnyqXEVWTUPA07q3F48yrGYw4riEej0UbvLZZGeq6O7o7UxL1MiySv5C96tZpgoe2Xzd+4f9nmWr+6KFssZW5RBZ9IujEiQ77Jbj1hRP4VpIlFttIV+3CV0UIoNjg+SUO+H3mqZVWqPQS7jTOaVOR3+KS51GkYNd4EqpIy5AfCHtAdhttUwo5JWiUFod3nYPNjtrcZ7tzmTHlIMsf/vszdQtCRa45jmWf/+SYdxwb9/YZ1m8YHNA0PmTT8YdJ3hX+5yVP9Duskqfw=]

:::

If the image is bigger than the space the `Image` component has been assigned by its parent layout, then the image will be scaled down to fit the space in the `Image` component.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNrFUk1Lw0AQ/SvLXExgSb8oSC6SikgPiqigYoWsyaQtbnaX3QlaSv67G2OrKVXqyUPCTGbevDdvsgZhDMRryHSOEEMmhXPsYpUYw/CNUOWO+Xg9UzNqnsyiILwhYelKzDEI2wpZpMoqti00X+sWVEPNodAyR+sgflzDMod4wEGJsmH8gAAHXRQO6R7i/iZ+8HH9xMH4eR1kO2zaJh3hW/6t+CbZUX9eLXd1T0vfFlVWBumCyLi413sWc/Gq7UuU6bLnyqXEVWTUPA07q3F48yrGYw4riEej0UbvLZZGeq6O7o7UxL1MiySv5C96tZpgoe2Xzd+4f9nmWr+6KFssZW5RBZ9IujEiQ77Jbj1hRP4VpIlFttIV+3CV0UIoNjg+SUO+H3mqZVWqPQS7jTOaVOR3+KS51GkYNd4EqpIy5AfCHtAdhttUwo5JWiUFod3nYPNjtrcZ7tzmTHlIMsf/vszdQtCRa45jmWf/+SYdxwb9/YZ1m8YHNA0PmTT8YdJ3hX+5yVP9Duskqfw=]

:::




## How to create an image
BagaWork contains no functionality for creating images, but there exists many different apps you can use to create images, such as [Google Drawing](https://docs.google.com/drawings) (requires a Google account). Notice that many of these apps often use an internal format to store your image in, but one often can *export*/*download* the image in a well-known image format, such as a PNG file.




## How to host an image
If you create your own image that you want to use in your BagaWork app, you must upload that image to the web. There exist different hosting services you can use for this, such as [Google Drive](https://google.com/drive) (requires a Google account).

After you have uploaded your image to Google Drive, it will only be available to you (the one signed in to your Google account). To make it available to others, you must change the image's *General Access* policy. In Google Drive:

1. Choose to share the image
2. In the apperaing modal, change the *General Access* option from `Restricted` to `Anyone with the link`

To obtain the URL to the image, in Google Drive:

1. Choose to share the image
2. In the appearing modal, click on the `Copy link` button
3. The copied URL does not lead to the image, but to a webpage that shows the image. The URL will look something like this:
	```
	https://drive.google.com/file/d/klsdflkgjalkhdfljdsfsdfg/view?usp=sharing
	                                |                      |
	                            ID start                ID stop
	```
4. In this example, `klsdflkgjalkhdfljdsfsdfg` is the ID of the image
5. The URL to the image will be:
	```
	https://drive.google.com/uc?id=REPLACE_THIS_WITH_THE_ID
	```
6. In this example, the URL to the image would be:
	```
	https://drive.google.com/uc?id=klsdflkgjalkhdfljdsfsdfg
	```

If you read Google Drive's User Agreement, it probably says something like that you may only use it for personal use, and not to store images used by apps like this, but as long as you only create small apps with few users, they will hopefully don't mind you use it like this.


## That's it!
Woho! 🥳 Now you know how to use images in your BagaWork apps, goor work!