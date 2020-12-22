class SIPack {
    constructor(xml) {
        let info = xml.querySelector("info");
        this.info = {};

        // Basic
        let package_data = [];
        package_data.push(xml.querySelector("package").attributes["name"]);
        if(info.querySelector("comments") != null) this.info.comments = info.querySelector("comments").innerHTML;
        package_data.push(xml.querySelector("package").attributes["date"]);
        package_data.push(xml.querySelector("package").attributes["publisher"]);
        package_data.push(xml.querySelector("package").attributes["difficulty"]);
        package_data.push(xml.querySelector("package").attributes["restriction"]);
        package_data.forEach((data) => {
            if(data != null && data != undefined) this.info[data.name] = data.value;
        });

        // Authors
        this.info.authors = [];
        info.querySelectorAll("author").forEach((author) => {
            this.info.authors.push(author.innerHTML);
        });

        

        // Rounds
        this.rounds = [];
        xml.querySelectorAll("round").forEach((round) => {
            let round_obj = {};
            round_obj.name = round.attributes["name"].value;
            let round_type = round.attributes["type"];
            if(round_type != null && round_type != undefined)  round_obj.type = round_type.value;
            else round_obj.type = "normal";
            
            round_obj.themes = [];
            round.querySelectorAll("theme").forEach((theme) => {
                let theme_obj = {};
                theme_obj.name = theme.attributes["name"].value;
                theme_obj.prices = [];

                theme.querySelectorAll("question").forEach((question) => {
                    theme_obj.prices.push(question.attributes["price"].value);
                });

                round_obj.themes.push(theme_obj);
            });


            this.rounds.push(round_obj);
        });
    }
}
