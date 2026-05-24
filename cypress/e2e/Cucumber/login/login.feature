#@smoketest
#Feature: check login functionality 

#@TC-1234 @test
#Scenario: validate that the user can login successfully 
   #Given The user login the website 
   #When The user types "sallybassam97@gmail.com" in email input field
   #And The user types password in password input field
   #And The user clicks on login button 
   #Then The user should be login successfully and redirected to home page 

#@TC-2222 @test
#Scenario: validate that the user can login using google account
   #Given The user login the website 


#@TC-0000 @test
#Scenario: testing 
   #Given The user login the website 

Feature: check login functionality 
Scenario Outline: Scenario Outline name: validate that the user can login successfully 
   Given The user open the website   
   When The user types <email> in email input field 
   And The user types <password> in password input field 
   And The user clicks on login button 
   Then <email> should be login successfully and redirected to home page 

   Examples:
       | email | password | 
       | "sallybassam97@gmail.com" | "sallytest123" | 
       | "eng.razanBalatiah96@gmail.com" | "test@123" |
       

       #<> هاي الاقواس بنحطها بس نستخدم الجدول لانه الايميل والباسوود هون متغيرين عشان يميزهم وكل مرة يدخل البيانات اللي بالجدول