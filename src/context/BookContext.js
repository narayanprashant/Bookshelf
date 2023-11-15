import React from "react";

export const BookContext = React.createContext();

class BookContextProvider extends React.Component {
    state = {
        books: [
            {
                title: "AMAZING Science Fiction Stories",
                author: "Paul Anderson",
                pageNum: 296,
                imageURL:
                    "https://c8.alamy.com/comp/KT3TE8/amazing-science-fiction-stories-195911-KT3TE8.jpg",
                topic:
                    "This work is in the public domain because it was published in the United States between 1928 and 1963, and although there may or may not have been a copyright notice, the copyright was not renewed. For further explanation, see Commons:Hirtle chart and the copyright renewal logs.",
            },
            {
                title: "AMAZING STORIES",
                author: "H.G Wells , Jules Verne",
                pageNum: 200,
                imageURL:
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Amazing_Stories%2C_April_1926._Volume_1%2C_Number_1.jpg/800px-Amazing_Stories%2C_April_1926._Volume_1%2C_Number_1.jpg",
                topic:
                    "Amazing Stories is an American science fiction magazine launched in April 1926 by Hugo Gernsback's Experimenter Publishing. It was the first magazine devoted solely to science fiction. Science fiction stories had made regular appearances in other magazines, including some published by Gernsback, but Amazing helped define and launch a new genre of pulp fiction.",
            },
            {
                title: "The Europeans Short Novel",
                author: "Henry James",
                pageNum: 296,
                imageURL:
                    "https://c8.alamy.com/comp/2AKTW3C/the-europeans-short-novel-by-henry-james-first-published-in-1878-paperback-book-2AKTW3C.jpg",
                topic:
                    "A sketch is a short novel by Henry James, published in 1878. It is essentially a comedy contrasting the behaviour and attitudes of two visitors from Europe with those of their relatives living in the new world of New England.",
            },
            {
                title: "Dracula",
                author: "Bram Stoker",
                pageNum: 200,
                imageURL:
                    "https://i.idefix.com/cache/600x600-0/originals/0001828853001-1.jpg",
                topic:
                    " It has no single protagonist, but opens with solicitor Jonathan Harker taking a business trip to stay at the castle of a Transylvanian nobleman, Count Dracula. Harker escapes the castle after discovering that Dracula is a vampire, and the Count moves to England and plagues the seaside town of Whitby. A small group, led by Abraham Van Helsing, hunt Dracula and, in the end, kill him.",
            },
            {
                title: "Under Radar",
                author: "Michael Tolkin",
                pageNum: 200,
                imageURL:
                    "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2014%2F03%2Funder-radar.jpg&q=60",
                topic:
                    "Michael Tolkin has garnered acclaim for his classic dark comedies The Player and Among the Dead. His most ambitious novel yet, Under Radar is a tale of guilt and redemption that is “provocative . . . so unexpected, so full of startling insights, that it seems to be blazing a fresh trail” (John Hartl, The Oregonian).",
            },
            {
                title: "Panchatantra",
                author: "Vishnu Sharma",
                pageNum: 296,
                imageURL:
                    "https://cdn.shopify.com/s/files/1/0607/9859/9427/products/shortStoriesfromPanchatantra-3_1.jpg?v=1661671009",
                topic:
                    "The Panchatantra stories are believed to have been written primarily by a scholar named Vishnu Sharma somewhere around the 3rd century BCE. These Panchatantra short stories are mostly narratives based on animals and are perfect for children as they teach basic values and skills, and impart some essential life lessons.",
            },
        ],
    };

    render() {
        return (
            <BookContext.Provider value={this.state}>
                {this.props.children}
            </BookContext.Provider>
        );
    }
}

export default BookContextProvider;
