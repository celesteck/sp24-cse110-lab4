1. Line 12 will log 3 since i was set as var, it can be accessed outside the for loop.
2. Line 13 will log 300 * 0.5 since var is discountedPrice was set as a var and is accesible outside of the for loop.
3. Since finalPrice is declared wiht var, line 14 will log the most recent value of finalPrice, 150.
4. The function will return the discounted array, [50, 150, 300] since discounted is set by var.
5. At line 12, it will cause an error since i is set by let inside the for loop and is being called outside of it.
6. At line 13, it will cause an error since discountedPrice is set by let inside the for loop and is being called outside of it.
7. At line 14, it will log the last finalPrice since this variable was correctly set.
8. It will return [50,100,150], the discounted array since all the variables were set with access within each's scope.
9. At line 11, an error wil be thrown since i is only declared within the scope of the for loop.
10. Line 12 will log the length of the array since length was defined within the scope of the entire function.
11. [50, 100, 150] will be returned since all the variables were set within their proper scopes.
12. .
    1.  let studentName = student.name;
    2.  let gradYear = strudent['Grad Year'];
    3.  student.greeting();
    4.  let favoriteTeacherName = student['Favorite Teacher'].nanme;
    5.  let firstCourse = student.courseLoad[0];
13. .
    1.  32, + concatenates since 3 is a string
    2.  1, since - will make both numbers
    3.  3, since null is 0 
    4.  3null, since it is concatenating them as strings
    5.  4, true = 1
    6.  3undefined, it is concatenating the strings
    7.  NaN, undefined is NaN 
14. .
    1.  true, '2' becomes a number
    2.  false, 2 is greater than 1
    3.  true, it'll treat '2' as a number and 2 = 2
    4.  false, true = 1
    5.  false, === does not convert the type
15.  `==` will convert both variables before performing the comparison while `===` will not.
16.  .
17.  It'll return [2,4,6]. it'll iterate through [1,2,3] and multiply each i by 2. So doSomething(1) = 2, doSomething(2) = 4, doSomethign(3) = 6
18.  .
19. 1
    4
    3
    2