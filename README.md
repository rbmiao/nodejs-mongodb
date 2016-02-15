# nodejs - mongodb






dan@ubun:~$ mongo
MongoDB shell version: 2.4.9
connecting to: test
Welcome to the MongoDB shell.
For interactive help, type "help".
For more comprehensive documentation, see
	http://docs.mongodb.org/
Questions? Try the support group
	http://groups.google.com/group/mongodb-user
> use sampsite
switched to db sampsite
> 
> db.students.insert([{"student" : "Dale Cooper", "street" : "123 main street", "city" : "Yakima", "state" : "WA", "sex" : "Male", "gpa" : 3.5 } ...])
Sun Feb 14 23:34:52.660 SyntaxError: Unexpected token .
> 
> 
> db.students.insert([{"student" : "Dale Cooper", "street" : "123 main street", "city" : "Yakima", "state" : "WA", "sex" : "Male", "gpa" : 3.5 } ])
> 
> db.students.insert([{"student" : "Ping zhang", "street" : "654 walmart street", "city" : "Boston", "state" : "MA", "sex" : "Female", "gpa" : 5.5 } ])
> 
> db.students.insert([{"student" : "Dann Fang", "street" : "333 walmart street", "city" : "worcester", "state" : "MA", "sex" : "Male", "gpa" : 4.5 } ])
> 
> 
> db.students.find().pretty()
{
	"_id" : ObjectId("56c15577176bc98ab416d34c"),
	"student" : "Dale Cooper",
	"street" : "123 main street",
	"city" : "Yakima",
	"state" : "WA",
	"sex" : "Male",
	"gpa" : 3.5
}
{
	"_id" : ObjectId("56c155aa176bc98ab416d34d"),
	"student" : "Ping zhang",
	"street" : "654 walmart street",
	"city" : "Boston",
	"state" : "MA",
	"sex" : "Female",
	"gpa" : 5.5
}
{
	"_id" : ObjectId("56c155d1176bc98ab416d34e"),
	"student" : "Dann Fang",
	"street" : "333 walmart street",
	"city" : "worcester",
	"state" : "MA",
	"sex" : "Male",
	"gpa" : 4.5
}
> 
> 





dan@ubun:~/sampsite$ npm start

> sampsite@0.0.0 start /home/dan/sampsite
> node ./bin/www



dan@ubun:~/sampsite$ mongod --dbpath /home/dan/sampsite/data --smallfiles
Sun Feb 14 23:28:05.561 [initandlisten] MongoDB starting : pid=4061 port=27017 dbpath=/home/dan/sampsite/data 64-bit host=ubun
Sun Feb 14 23:28:05.562 [initandlisten] db version v2.4.9
Sun Feb 14 23:28:05.562 [initandlisten] git version: nogitversion
Sun Feb 14 23:28:05.562 [initandlisten] build info: Linux orlo 3.2.0-58-generic #88-Ubuntu SMP Tue Dec 3 17:37:58 UTC 2013 x86_64 BOOST_LIB_VERSION=1_54
Sun Feb 14 23:28:05.562 [initandlisten] allocator: tcmalloc
Sun Feb 14 23:28:05.562 [initandlisten] options: { dbpath: "/home/dan/sampsite/data", smallfiles: true }
Sun Feb 14 23:28:05.574 [initandlisten] journal dir=/home/dan/sampsite/data/journal
Sun Feb 14 23:28:05.574 [initandlisten] recover : no journal files present, no recovery needed





if git push has access rights error,

use: git remote add origin https://github.com/rbmiao/nodejs-mongo

dan@ubun:~/sampsite$ git push -u origin master
Username for 'https://github.com': rbmiao
Password for 'https://rbmiao@github.com':


then: git push -u origin master


http://192.168.1.17:3000/thelist
http://192.168.1.17:3000/newstudent



