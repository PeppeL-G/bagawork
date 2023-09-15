<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# 6. Sizing GUI Components
This tutorial will teach you how you can change size of GUI components.



## Positioning children
First, some quick repetition.

The child components in :docs[rows] are as wide as the `Rows` component, and their height are just tall enough to surround their content, and the children are positioned at the top of `Rows`. To position the child components elsewhere in `Rows`, you can insert extra :docs[space] components in `Rows`, which will share the remaining space available in `Rows` evenly among them.

It works the same for the :docs[columns] component, but the children are instead positioned as columns, and not as rows.

::: tip Example

Try resizing the app below, and notice how the `Space` children gets smaller/bigger, while the three other children stay at the same size.

::bagawork-project[link&app&code=RowsPage-ColumnsPage&baga=eNrVklFLwzAQx79KuZe1EGRTJq5vOlB8EMTtQbGDxeQ6yrIkJCnbKP3uJosdHQ7RR9/ujv/97/LLNUC1hrwBpjhCDkxQa5On/a3WCe4cSm4THzeFLBwzSB3OHDXuma4wzQ7Vwhl0tZHJi9raUA/FtpAttARKJTgaC/l7AxWHfERA0k0YdLABAqosLbpXyIdd/ObjdkFAe6+Tzmj2GJOTfbvRx5VD0tv5oa7ObZvGSuHmvi9d3lfGumV28UHZemVULflUCWXSgUE+yEgnnmnK8LtIV3LdU0XLGTIl+TnPPQqhtr+wrY0W2NPd1c4pmS7nKmFK1BtpvX1glU5jGt6eRXV2/AsCO49tMiGwh/xyfNOSiPXqJ6w9wz+Q/er673DDgXRku/s6j3U8HEas16Pubue40cLjCfe7aD8Bh/U0jA==]

:::



## Sizing children
It's not only `Space` children that can grab some shares of the remaining available space; any child component used in `Rows` and `Columns` can grab some of the remaining available space. But it's only `Space` children that grabs it by default, and by default they grab equally much of it. But all this can be changed with the configuration method `.size()` on the children. Let's go through how this works in detail.

First, let us ignore the `Space` children, and instead focus on all other children, such as `Text` and `Button`.

By default, all children in `Rows` will be just tall enough to surround their content. If you want them to also grab some of the remaining available space, you can call the method `.size()` on the child, and pass it a number indicating how many shares of the remaining available space it should also occupy. 

::: tip Examples

A few examples.

::bagawork-project[link&app&code=FirstPage-SecondPage-ThirdPage-FourthPage&baga=eNqtld9v0zAQx/+Vk1+WSKHqz5HlDZA28QBCtA8gOqlu4jYG145sh65U+d85O03WjqaaNp6aO5+/d/l+1Mue0KIgyZ6kKmMkIamgxsCn3buiAPZgmcwM4PN+Luc21YxaNrVU2y90zYLQZ+dWM1tqCbdcG3/gstVcVqSKyEqJjGlDkh97wjOSDCIi6cZ18jokImq1Msx+I8mbOG6i7xhdj6r7iBSod3K7FvxYBydDt/3bwV1wNPldyZ/O/FVtTVBn5naG94JFK7MIo+OT3pKmv9ZalTL7oITSwZVm2VUYLD4ryUCtwOYM0pyLTDMJOdMYUSGgZ/gf9CoCo8DFbQnFip+lsWBdmklVrnOwCkypfRcnyDWkSuLb2N7ROO9La5UMFnfK1zMsyaDwI/fcTzD1KfcSYX0nbJlE5IEkw+F1RHYkGcejKqqtHV2y9lHvdd4+6jw115s0CDtNnuXcgMVK9GNToOPSwpZKa2AAJndWHghotqFccrkG+ptyKpaCgSloynow5TJlWIRKTgyLlRS7GgiGtFE0asNqURMBxyxHPmtmPT5sg6lgAKq0Lji0N2EnH2yoT/HMXKabzji+8XSGk2FDZ3yJTiv3OjitzHk2/f6L6PT7B4P+G6Dn8cG+DaF2hG5GK1Vqm59AuvWpbkpvbxpKcUNpcnE9tXqv3E+tzllO45dQGj+f0QyPa+9gyYTadv8L8T6vBQRtBfwa9ISPZmj4jd31yWGWfxdesyRaaG5TnzJrdvd5ZIN+3Oy9SfNxmbFNIdB895G5r/4CvhJ3rw==]

:::

The special thing with the `Space` component is that it has the size `1` by default (it has been made like this because that's often how one wants to use it).

So when you use the `Space` component like this:

```js
Space
```

It has the same functionality as being used like this:

```js
Space.size(1)
```

::: tip Example

::bagawork-project[link&app&code=StartPage&baga=eNp1UNFKwzAU/ZVwX9ZCHGzKKHkTH2QPgrg9KHawLLmdZVkSkpStlv67acuqU3y759ybc05OA9xaYA0IIxEYCMW9J0/1vbUEzwG19CTOTa7zIBzygKvAXXjme0zSns2Dw1A5TcZFx7a5bqGlUBgl0Xlg7w2UEtiMgubHzqk/BwqmKDyGV2A3WXZBbxEtbtsNBRv1rl4PgssBXIUe/cfgHfiR/LEqf2d+MSefDEweVpYLnO64OOydqbR8MMq4ZFKjUuY0Senlbh31p778xGSW/j13KCdpsl0SI0Rla2I0kvBROklMEQckvrfZfuv942tLfRhd07FUCmdg8/mCQg3sLhtbWuPRqvjLrq1N+wVjUKRi]

:::

You can still call `.size()` on `Space` if you want it to claim another amount of shares of the remaning available space.

::: tip Example

::bagawork-project[link&app&code=StartPage&baga=eNptUF9rwjAc/Crh99IWMkEdUvI29jB8GIzpw8YqGNNftRiTkKRoV/rd1z+YzW1vucvl7nINcGOANSB0jsBASO4cea4fjCF48ahyR7pzk6nMC4vc48pz61/4HuNkYDNv0VdWkXDRs22mWmgpFFrmaB2wjwbKHNiUguKnPmmQAwVdFA79G7C7NL2i9w4t5u2Ggun8bl6PhssR3JQO+aF4D340f6rK351f9dnFI5P5leECJzsujnurK5U/aqltHNUopT5HCb3q1p3/xJWfGE+Tv3KLeZTE2yXRQlSmJlohKcrCH4guiD8gcUPM9ttvzB0M5/8YmlIdQ3oSxqVwATabLSjUwO7TsNYaT0Z2v+1X27RfeoGmxQ==]

:::

## That's it!
Good work, now you know how to change the size of GUI components! 🥳 Using :docs[rows] and :docs[columns] with `.size()` on the children is enough to create almost any layout you want.