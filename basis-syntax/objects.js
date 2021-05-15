// object literals

// const blogs = [
//     { title: 'React', likes: 30},
//     { title: 'Node Js', likes: 50}
// ];

let user = {
    name: ' Mahfoos',
    age: 30,
    email: 'outlook@com',
    location: 'Kinniya',
    blogs: [
        { title: 'React', likes: 30},
        { title: 'Node Js', likes: 50}
    ],
    login: function(){
        console.log('Hello Object');
    },
    logout: function(){
        console.log('Log Out');
    },
    logBlogs: function(){
        //console.log(this.blogs);
    //     console.log('this user has written the following blogs: ');
    //     this.blogs.forEach(blog => {
    //         console.log(blog);     //call back function
    //     })
    // }

    console.log('this user has written the following blogs: ');
    this.blogs.forEach(blog => {
        console.log(blog.title, blog.likes);     //call back function
    })
}
};

console.log(user);
console.log(user.name);
user.age = 35; // overide

console.log(user['name']);
user['name'] = 'Ahamed';

user.login();
user.logout();
user.logBlogs();


// Math object

console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 7.7;

console.log(Math.round(area)); //8
console.log(Math.floor(area)); // 7
console.log(Math.ceil(area)); // 8
console.log(Math.trunc(area));

// radom numbers

const random = Math.random();
console.log(random);
console.log(Math.round(random));

