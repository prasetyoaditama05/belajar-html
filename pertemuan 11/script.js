class Search {
    constructor(data) {
        this.data = data;
    }

    containsKeyword(text, keyword) {
        if (!keyword) return true; 
        return text.toLowerCase().includes(keyword.toLowerCase());
    }

    search(keyword, filterType) {
        for (let i = 0; i < this.data.length; i++) {
            let book = this.data[i];
            let shouldDisplay = false;

            switch (filterType) {
                case "title":
                    shouldDisplay = this.containsKeyword(
                        book.querySelector(".title").innerText,
                        keyword
                    );
                    break;

                case "author":
                    shouldDisplay = this.containsKeyword(
                        book.querySelector(".author").innerText,
                        keyword
                    );
                    break;

                case "publisher":
                    shouldDisplay = this.containsKeyword(
                        book.querySelector(".publisher").innerText,
                        keyword
                    );
                    break;

                case "title_year":
                    const titleText = book.querySelector(".title").innerText;
                    const yearText = book.querySelector(".year").innerText;
                    const yearInput = document.querySelector("#yearInput").value;

                    shouldDisplay = this.containsKeyword(titleText, keyword) &&
                        (!yearInput || yearText.includes(yearInput));
                    break;

                default:
                    shouldDisplay = true; 
            }

            book.style.display = shouldDisplay ? "" : "none";
        }
    }
}

const keyword = document.querySelector("#keyword");
const filterRadios = document.querySelectorAll('input[name="filter"]');

function searching() {
    let books = document.querySelectorAll(".book");
    let search = new Search(books);
    let selectedFilter = document.querySelector('input[name="filter"]:checked').value;
    search.search(keyword.value, selectedFilter);
}

keyword.addEventListener("keyup", searching);
filterRadios.forEach(radio => {
    radio.addEventListener("change", searching);
});


searching();