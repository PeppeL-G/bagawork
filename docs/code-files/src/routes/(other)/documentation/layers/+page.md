<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# `Layers`
On this page you find the documentation for the GUI Component `Layers`.



## Introduction
The `Layers` component is a layout that stacks its children on top of each other as layers (the first child is the bottom layer, then the second child is the layer on top of that one, and so on). The children are always as wide and tall as the `Layers` component. 

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNqVkMFKxDAQhl8lzGkLoeiKB3vrSQoKgntQ7EJjM3WLaRKSKWwpfXfTlq3bPSh7SWYmM/98+XsQ1kLSQ2kkQgKlEt6z5y61luGRUEvPQtznOqfSoSB8JeHoRXzhJpqqOTmk1mm2PIzVIdcDDBwqoyQ6D8lHD7WE5JaDFs24aWoHDqaqPNIbJDen+D3Ew56DDVqryVksm5MV8LJ7gR6TM+rHtr7kfRJdIIvLQ62kQ72ZH3PaBYmYwrEpMiYaRgdkn4bINEyNI3ER8b96pyZW6ylpaikV/jdCxl5qR4uLHI6QbO+2HLpw3z+crNlhY1X42sqilSup/86qVLaKrrDljK/4hRj2ww/n5MKr]

:::



## `children()` - Setting the children
Use the configuration method `children()` to tell the `Layers` component which its child components should be. Pass it the child components as individual arguments (as many/few as you want).

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNqVkU1PwzAMhv+K5QudFFUwxIHeJg5oEkhI7ACiSMsad42WJlXisk1T/zvpBvsCDlwS24lfP9a7Qdk0mG2wcIoww8LIEOBxPWoaoBWTVQFivMltzoUnyfTM0vOTnFMy2FZz9sStt7B/6KtdbjvsBJbOKPIBs7cNaoXZlUAr637S9jsKdGUZiF8wu/yOX2PcvQtsotZJ505svEtOgPez99B9ckR93+pz3ge5jmRpUWmjPNlk95jzJEqkHI9kOgZZw4wqbRVwRWD6lhhJBuXlMoCEmSwWc+9aqwQEB2vXQiHtBUMggprS6UD8JXxQ1Hab1FopQwKWmqsobXRNR/pRKmXXJIP0ULtzxvlk2v/8fdDrjueLBuiDLOjyaNoXQSXPl5lRIdtAsEXtt7U9ZumdZXA/FQ6LDvb+C1xhNrweClzH++b229QJ1Y2JppyYe+LnKCzG5Ui1hv9h6NHa0wNE9959AvybBGY=]

:::