## Task description

The task is to build a simple beer finder application, with a makeshift user system. This is how it should work:

The first screen the user sees is the login screen. The username input field is required, maximum 16 characters are allowed. After typing in your username, instead of a password authentication, you should call the YesNo API (https://yesno.wtf/api). If the answer property is 'yes', the user is logged in and taken to the beer listing. If the answer property is 'no', the user is not logged in, and you should display an error label on the login screen.

When the user is logged in, the username is on the header, with a logout button. The user should stay logged in until the user clicks the logout button.

The beer listing and the beer details site is only available after a successful login. For the data, use the Punk API v2 (https://punkapi.com/). On the listing page, you should be able to filter the beers by their names and by a range of ABV (alcohol by volume) percentage. The pagination method is up to you, whether you want to do pages or infinite scrolling, the only requirement is that after a back button navigation from a detail page, the user should get back to the exact position of listing. When clicking on a beer, the user should be taken to the details page.

APIs:

- https://yesno.wtf/api
- https://punkapi.com/

Pages:

- login
- listing
- details

Bonus:

- add styles in CSS or SCSS
- flexbox or grid layout preferred
