---
name: image
menu: Redux
---

# 'image' Redux module

This Redux module exclusively handles the state and behaviour for the image displayed on the landing page. By default it is set to null, however as soon as `updateUrl()` is called a new url is fetched remotely from `https://dog.ceo/api/breeds/image/random`. The request returns a status (usually `success`) and a randomly generated url to a picture of a dog. Each time `updateUrl()` is called a new image (with a new URL) will be displayed.



## Initial State

```
{
  url: null,
  activeRequest: null,
}
```

## Schema

### image.url
Can either be a string or `null`. This is the url that is used render the image on the landing page. If value is `null` then it will display a loader where the image should be.

### image.activeRequest
Can either be a function ([axios cancellation token](https://www.npmjs.com/package/axios#cancellation)) or `null`. If it is not `null` then the current request will be cancelled when a new one is sent. Alternatively, the current request can also be manually cancelled with the `cancelActiveRequest()` action below. 

## Actions

### setUrl()
Accepts a string or `null`. Sets the `image.url` value.

### setActiveRequest()
Accepts a function ([axios cancellation token](https://www.npmjs.com/package/axios#cancellation)) or `null`. Sets the `image.activeRequest` value. However, does not cancel the actual request. It is not advised to call this action directly. (Rather use `cancelActiveRequest()`).

### cancelActiveRequest()
Cancels the current active request and changes `image.activeRequest` to `null`.

### updateUrl()
If there is an `image.activeRequest` it is cancelled. Then sets `image.activeRequest` to [axios cancellation token](https://www.npmjs.com/package/axios#cancellation). Also sets `image.url` to `null` (therefore showing loader in UI), followed by a request to change to a new random image (via `https://dog.ceo/api/breeds/image/random`). Once `image.url` has been updated, `image.activeRequest` is set back to `null`. 
