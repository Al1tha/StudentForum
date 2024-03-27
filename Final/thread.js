var defaultThreads = [
    {
        id: 1,
        title: "Cooking club",
        author: "unknown",
        date: Date.now(),
        content: "Thread content",
        comments: [

        ]
    },
    {
        id: 2,
        title: "Music club",
        author: "unknown",
        date: Date.now(),
        content: "Thread content 2",
        comments: [

        ]
    },
    {
        id: 3,
        title: "Football club",
        author: "unknown",
        date: Date.now(),
        content: "Thread content 3",
        comments: [

        ]
    },
    {
        id: 4,
        title: "Art club",
        author: "unknown",
        date: Date.now(),
        content: "Thread content 4",
        comments: [

        ]
    },
    {
        id: 5,
        title: "Book club",
        author: "unknown",
        date: Date.now(),
        content: "Thread content 4",
        comments: [

        ]
    },
    {
        id: 6,
        title: "Gaming club",
        author: "unknown",
        date: Date.now(),
        content: "Thread content 4",
        comments: [

        ]
    },
    {
        id: 7,
        title: "Dance club",
        author: "unknown",
        date: Date.now(),
        content: "Thread content 4",
        comments: [

        ]
    },
]

var threads = defaultThreads
if (localStorage && localStorage.getItem('threads')) {
    threads = JSON.parse(localStorage.getItem('threads'));
} else {
    threads = defaultThreads;
    localStorage.setItem('threads', JSON.stringify(defaultThreads));
}
