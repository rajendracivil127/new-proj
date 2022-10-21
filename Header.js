import React from "react";

class Header extends React.Component
{
    render()
}
return (
    <nav class = "navbar">
        <ul class = "navbar-nav">
            <li class = "nav-item Top stories">
                <a class = "nav-link" href = "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"></a>
            </li>
            <li class = "nav-item new stories">
                <a class = "nav-link" href = "https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty"></a>
            </li>
            <li class = "nav-item best stories">
                <a class = "nav-link" href = "https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty"></a>
            </li>
        </ul>
    </nav>
)