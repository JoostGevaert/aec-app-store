import express from "express";
import bodyParser from "body-parser";

interface IArticleInfo {
    [key: string]: { 
        upvotes: number, 
        comments: {
            username: string,
            text: string
        }[]
    }
}

interface IComment {
    username: string
    text: string
}

const articlesInfo: IArticleInfo = {
    'learn-react': {
        upvotes: 0,
        comments: []
    },
    'learn-node': {
        upvotes: 0,
        comments: []
    },
    'my-thoughts-on-resumes': {
        upvotes: 0,
        comments: []
    },
}

const app = express();

app.use(bodyParser.json());

app.post('/api/article/:name/upvote', (req, res) =>{
    const articleName: string = req.params.name;

    articlesInfo[articleName].upvotes += 1;
    res.status(200).send(`${articleName} now has ${articlesInfo[articleName].upvotes} upvotes`)
});

app.post('/api/article/:name/add-comment', (req, res) => {
    const { username, text }: IComment = req.body;
    const articleName: string = req.params.name;
    articlesInfo[articleName].comments.push({ username, text });
    res.status(200).send(articlesInfo[articleName]);
})

app.listen(5000, () => console.log('Listening on port 5000'))
