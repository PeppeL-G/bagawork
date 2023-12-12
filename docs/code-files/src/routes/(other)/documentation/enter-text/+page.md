<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# `EnterText`
On this page you find the documentation for the GUI Component `EnterText`.

## Introduction
The `EnterText` component is a view in which the user can enter some text. If the user presses the Enter key (`↵`) in the component, the app will progress to the next page.

::: tip Example

In this example, the GUI consists of only the `EnterText` component, so it covers the entire screen.

::bagawork-project[app&link&code=StartPage&baga=eNqVkEGLwjAQhf9KeSeFsKyKh82th0U8CIIeFCsYmqmINQ3JFJSS/26qWO3e9pK8mcy895EGylrIBnmlCRJ5qbxPFrfU2oSuTEb7JOomMxnnjhTTipXjpTrSYPjoZuyIa2eS7qHthswEBIGiKjU5D7lrcNKQIwGjLm3SYxwCVVF44g3k90tvow57ARu9eptPs/mz6AF32R10W3xQz+rTX95fw+TWcb7jFbhCjidjgVu8pz8viDVdbBlNejC9/NSf50Wq65L/AdBmf3E8BofD8P1p+3AHe9SNZw==]

:::



## `text()` - Setting an initial text
Use the configuration method `text()` to give the `EnterText` an initial text it should contain contain initially. Pass the text as a string.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNqVj81qwzAQhF9FmVMCorQpOVQ3H0rJoVBooAl1IMJat6aOLKQ1JBi9e+WEGLu3Xlazf7OfOmjnoDoUjSEoFLUOQbyeM+cEnZisCSLpLrc5F5400ztrz2/6i+aLSzVnT9x6K4ZGX425jYgSZVMb8gHqs0NloB4krD72ly7jkGjKMhBvoe5vepd03Eu45DXZvJqtr8kEeLg9QPfJiPqlrf7yPlsmv0nzd5zC/PDhKybxTZ5mh8XwB4kT1PJxKXFO7+rpBraho6uT8QRwwpSFn3WZmbbmf0CNeEYQcR9/AdUWlFs=]

:::




## `placeholder()` - Setting a placeholder text
Use the configuration method `placeholder()` to show a text in the `EnterText` component when it's empty. Try typing some text in the example below, and see that the placeholder text disappears. If you then delete what you have typed, the placeholder text will be shown again.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNqVjzFrwzAQhf+KeJMDorQpHarNQykZCoVmaKkDFta5DXVkIZ0hwei/V1aIibt1kd493b37NEI7BzWi6Q1Boel0COLlVDon6MhkTRBJj5WtuPGkmd5Ye37VX1SssluxJx68FfPD5MbKRkSJtu8M+QD1OWJvoO4krD5Mm3I7JPq2DcTvULcX/ZF03Em4lLWYPIdtzsUCeN49Q0/FFfXzsP/L+2SZ/Db137hON/Sdw4s622KCrFfzTySOUOv7tcQp3Q+PF7wtHdIwLzEXZGX42bSlGTr+B1qm4nQU9RVE3MVfoDuW6A==]

:::





## `page()` & `pageIfEqual()` - Going to next page
Use the configuration method `pageIfEqual()` to specify a `Page` the user should come to if she has entered some specific text in the component. Pass the method two values:

1. The text the user might enter
1. The `Page` the user should come to if that text has been entered

You can call this method multiple times.

Use the configuration method `page()` to specify which `Page` the user should come to if she hasn't entered any text that matches any of the texts passed to `pageIfEquals()`.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNq1lN1u0zAUx1/F8g2JZCraJirLDepQVfWCMUERTGRSvMRpozl2sI/HuirXvArPxZPgJCRtGFRDCnc+x+fr57/tPaZFgYM9jmXCcIBjTrVGb3bzokDsHphINLLrfShCiBWjwN4DVXBJN8xxa28IioFRAnUblbcMRYlLglPJE6Y0Dj7vcZbgYEywoHnVqQ7HBMs01Qw+4eD5tDWurDHzymuCC1uul9zUWzVGb+aufTd3ZRwNvjTZ7yO/k1/1KN5mPFFMOM1WCGtbYKSzB+aM3RFYw4k+brN4izKNdtIolNI7qTJgqEJ5FbmkzXwtucnFH0qGsBDAVFX54Aq7Lj1fxexcSJVTfmHrVxSPA1bp4ouh3Ikuma0bEXTOqIEsNU/JWVK1sVHcpn3Y8N0TMmzkIi/gEEoOsecGQIpfB/Xj2/ej82hXbnclCL7HwWQ8IXiHA8/3StJIOzklbf8whtG3GXe9pfBMIyGRLlicUV5LOjpC6NEtJbqh8W3kNiJ1V+4vnN6ZX3OOvZct5/QU5yMNh0R9uyUIGlyK7pjaoZu2XQ2NAncg7NmLRt7J9KzF9k5hH9/B/0QsJLTUIovZoCrPpuMa1/f8Ftc/hdt7SEPyXkmDcqMBseqvsbw15WgoTn9yVnPOZtP2a16zvOB22t4X3YOd69tVOk8Mh38gPWKKDkOU1+VPJGBbxQ==]

:::



## `store()` - Storing the entered text
Use the configuration method `store()` to store the text the user entered in an object (for example in `a` or `p`). Pass it two values:

1. The object in which the entered text should be stored (e.g. `a` or `p`)
2. The name of the variable in the object where the entered text should be stored

::: tip Example

::bagawork-project[app&link&code=MyApp-StartPage-GreetingPage&baga=eNqtUtFq20AQ/JXrUogEh6hdQrEgFLuENA+FkCakpQrokNa2sHwn7lbYjrjn/Eq+K1+Su8qSrRAChT4I7e5pZmdG14CoKogbyFSOEENWCmPYj920qhhuCWVumKubRCbkHynWyM5YeitXUm1k2s0zjYLwJwlNV2KBQdgiSCPVWrL+wE9tC7JgOcxVmaM2EP9poMghHnHwK5ySvxDgoOZzg/QL4k9d/dvV9p5D5fgGyJbssm0Ghvr9vSnfNAflF3XxWvO12pgoWxZlrlEG7VFCN44gMsUDBqMwItcE6d1S0IlhO1Vr5sV/TUPeff5NlfVavsGT0Lkk1AM6Q0pjIDhLPU0aRt5hcKERqZALr/hAnNCsJlJyr+H58eloa9gW4T5t62LcQjz+POawc+/TieVtaOP3Qjte/H9ya7V+x7JUnH1sROR92g9HygemZiJbMVKHv9dF0g864Cunp18me6f9RbnBdVU6wYMLM7A7NavL+TSvS/oHs0e20oMIe29fAJDDL8M=]

:::

## `handler()` - Handling the entered name
Use the configuration method `handler()` to tell the `EnterText` component which method to call to handle the entered text. The method will be passed the entered text as an argument. 

::: tip Example

::bagawork-project[app&link&code=MyApp-StartPage-GreetingPage&baga=eNqdUtFq3DAQ/BV1KdQGYZorocRQwiWUNA8tpU1oSx2wsPdy5nSSkNYkV+Pn/Eq/q19SObJ9dlIC6YPxSqudndnZBoQxkDZQ6BIhhUIK59jH3dIYhreEqnTMx02mMuo+JbbI3rH8Um2UvlH5cF9YFIRfSVj6LK4xikMFWaTaKjYmuts2FLXQclhpWaJ1kP5soCohPeDQtfBM7kuAg16tHNJ3SF8P8Q8ft1ccjMebVQaw83CYCRr7j6K6QzNnf1ZXD3l/0TcuKdaVLC2qKKQyuvAgiat+YXQQJ+QPUf5tLeiVYztdW9YJOM5jPjw/1bLeqn/gZPReEdoZ3FqoUqKNTB/dv8Dyk8eMk05xdGYRqVLXnYJ9k4xOaiKtej5/7n5PGMQhiCfTz+gRfoSTXv0cRNI7PsklpC+NQXsqnDd65iiHW0gXbxYcdv5/eNTyYM7iKXOmgh778z/ehBl8QCk1Zy+bIKJ9MZnIbFgnotgw0vstyftRjxdD4aC2V3r49qhXOi7kBW6N9IRnizmTu3Sb89WyrCU9Q+xEVr4n0V61fwHZJFeI]

:::