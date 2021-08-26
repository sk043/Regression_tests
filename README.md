# regression_test
 
To run : In terminal, type npx cypress open and run the desired files.( You must have npm and node install in the device)

Three Issues found 

1. In forgot password, user is promted the success message though user enters only random texts like "fdfdf" or with  numbers "asdasd222".
2. In sign up form, the email validation is not done. Try email like "yopmail" or any "fake email" genertor, user is allowed to login.
3. While testing the broken links throghout the site, some of the links were returning status "403", which can be seen while running it.
