<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# 3. Page Constants/Variables/Methods
This tutorial will teach you how to create and use page constants and page variables.


## What page constants/variables/methods are
Just as you can add constants/variables/methods in your `App` class, you can add also add them to your `Page` classes. The ones you add to a `Page` class are only are only accessible on the page where you wrote them.

## How to use page constants/variables/methods
The syntax for creating page constants/variabels/methods is the same as for creating app constants/variables/methods, but you write it in one of your `Page` classes instead. And instead of using the special Bagawork variable `a` to access the page constants/variables/methods, you would use the special Bagawork variable `p`, short for *page*. 

::: tip Example

Example of how to create a page constant.

::bagawork-project[app&link&code=StartPage&baga=eNrFU+9L3EAQ/VeGoeAFQvBOWiRQJJZD/KCUKrTSE7ImEy90bzfsD2sI+d+7a2q8PaKcn/yQsJuZ997Me6RD1jSYdljIkjDFgjOt4aLNmgbo0ZAoNbhztxIr459CETN0ZZgy39k9zaKhYhQZqwSMBf+1H0A99jFWkpekNKa/O6xLTOcxCrbxik8QjFFWlSbzC9PD5/ONO/e3MTaOL0AOZOfDJRh81B+H95dx+svsYglfIc94XVAe7nRm691tfsi/OinWNS8VidlQWplrR50Y95rln7om8Zw91BoYOB7OW7gjZk1dWQ5+xSSP4gno8oFUeyfLFrh8IA0j1Ut/FJgY46Pb99i502J6NP/y7Mw1bRru5g8cCkzJ9J/zKistf8MZKU6pkuol0C3tdzt01bCCppbOFEErLTzlB2bNBMyPT7YMCpHfJLcbMSGw27gyp9a4Hf7LXMo8Srw3M2E5j+I9YTek98NNBeQtzCpDaspB/wsM2Sx2slkKB8nu6aOT+blm5kD7cBQ49dczCRybH04bFjZ93qNpsQ/T4hWm7Qnfk8lt/w9LZs8y]

:::



## Why page constants/variables/methods are needed
So, why not always use app constants/variables/methods? Or is it better to always use page constants/variables/methods? Which one to use depends on where you need to access the constants/variables.

Since a page constant/variable/method only exists on the page that created it, you have to add it to your `App` class if you want to be able to access the it on multiple different pages. This suggests that app constant/variables/methods are better/more powerful. However, sometimes you need to use a constant/variable/method only on a single page. Then it can be better to add it to that page instead to keep your code better organized.

For example, imagine you create an app that consists of 100 pages, and each page need to use its own constant. Then you could create the 100 constants in your `App` class, but that makes the code in the `App` class a bit hard to read, since it becomes very big. So in this case, it might be better that each page create its own constant that is only used on that page.

::: tip Example

Example of an app that uses:

* An app variable to that stores the user's current name
* Two different pages (`BoyPage` and `GirlPage`) that each contain:
	* A page constant that stores a name
	* A page method that changes the app variable to the name stored in the page constant

::bagawork-project[app&link&code=MyApp-StartPage-BoyPage-GirlPage&baga=eNrtlFFr2zAUhf+KJgaLwZg67dJgGMMpJetDw1gKW1gKVu3rxFSRjCSzBuP/PimO3ShzTMoe9rKHOLJ8z9XRd4RKTPIcByWOeQI4wDElUqL7bZjnCF4UsEQiPS6XbKnMj5ENoE8oCmkWQ9TMxgKIgrkiQn0lKxg4db0SoArBUPvBzFa1qMKVi1NOExASBz9LnCU48F1sFtA+dhLsYp6mEtQPHFw044UeV48uznU/S1k3u6tfrO2067dbMi+l7X5aZMe+v/Ff0ovXGU0EsEH9aakedBNP6ccg+gKUcvS+JJ6xXb2LHLepmhRKcbavm3KkOHriW2RcR45n/gYTvjU+ejWrTFBLNNUThyrHYuriF739sYa1xcGlP6rcGs+wD8/eRzecWXh/awKf8Kfo74EteCHQ7gxl8pWbd4rbHFRdrQzl3DNmKk1iTVhCQQxyTx+ImS44oZ+Q+NlopTkAFsb2SHRxXKp923Z/tVHNofbwJ/Or0WjH3L8eN8wv+5g3MfZDv6EkE/Cfew/3a3/H/Wo0bi6FB9jkVHOyLgcLfiif79IwKWjPpcDZBFIuXq1YPt+YxDwnMbgduYQC0JYXaHdOkNJ8kT/+fBCLrbzhtNiwjgWOC4/ymPGGPysoddwzZQuQ5+m6w+QsTJU+LR0Eze3f3kxWNrdMS8IV/Otkvq+J+iBNOALp1U9nYhHzL7qB2UUfzygantNpeKLTocO3ZPJY/QaZGOOZ]

:::




## That's it!
Congratulation, now you know how to use page constants and page variables too! 🥳