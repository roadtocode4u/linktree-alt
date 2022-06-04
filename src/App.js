import "./App.css";

import LinkCard from "./LinkCard/LinkCard";

function App() {
  const data = [
    {
      title: "twitter",
      tagline: "Follow me on twitter",
      username: "surajshende247",
      link: "https://twitter.com/surajshende247"
    },
    {
      title: "github",
      tagline: "Follow me on github",
      username: "surajshende247",
      link: "https://github.com/surajshende247"
    },
    {
      title: "linkedin",
      tagline: "Follow me on linkedin",
      username: "surajshende247",
      link: "https://linkedin.com/surajshende247"
    }
  ];

  return (
    <div className="container">
      <h3 className="app-title">Linktree-Alt</h3>

      {
        data.map((cardinfo) => {
          return (
            <LinkCard
              title={cardinfo.title}
              tagline={cardinfo.tagline}
              username={cardinfo.username}
              link={cardinfo.link}
            />
          );
        })
      }
    </div>
  );
}

export default App;
