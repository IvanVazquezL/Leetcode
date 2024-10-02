class TinyURL {
    constructor() {
        this.id_longURL = new Map();
        this.longURL_shortURL = new Map();
        this.shortURL_longURL = new Map();
    }

    get(shortURL) {
        return this.shortURL_longURL.get(shortURL) || "Short URL not found";
    }

    post(longURL) {
        if (this.longURL_shortURL.has(longURL)) {
            return this.longURL_shortURL.get(longURL);
        }

        const id = this.getId();
        this.id_longURL.set(id, longURL);
        const base62 = this.toBase62(id);
        const shortURL = `https://tinyurl.com/${base62}`;
        this.longURL_shortURL.set(longURL, shortURL);
        this.shortURL_longURL.set(shortURL, longURL);

        return shortURL;
    }

    getId() {
        const time = new Date().getTime()
        let randomNumber = (Math.floor(Math.random() * 4096))
            .toString()
            .padStart(4,"0");
        return `${time}${randomNumber}`;
    }

    toBase62(num) {
        const base62Chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"; // Base-62 character set
        if (num === 0) return base62Chars[0]; // Handle the case for 0
    
        let result = '';
        
        while (num > 0) {
            const remainder = num % 62; // Get the remainder
            result = base62Chars[remainder] + result; // Prepend corresponding base-62 character
            num = Math.floor(num / 62); // Divide by 62 and continue
        }
        
        return result;
    }
}

const tinyURL = new TinyURL();

const shortURL = tinyURL.post("https://leetcode.com/problems/number-of-flowers-in-full-bloom/description/");
const longURL = tinyURL.get(shortURL);
const shortURL2 = tinyURL.post("https://leetcode.com/problems/number-of-flowers-in-full-bloom/description/");
const longURL2 = tinyURL.get("hola");


console.log(shortURL);
console.log(longURL);
console.log(shortURL2);
console.log(longURL2);