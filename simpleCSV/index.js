"use strict";
const data = `
uhyo,26,1,
John Smith,18,0,
Maru,10,0
`;
const users = data.split("\n")
    .filter(line => line !== "")
    .map(line => {
    const [name, ageString, premiumUserString] = line.split(",");
    return {
        name,
        age: Number(ageString),
        premiumUser: premiumUserString === "1"
    };
});
for (const user of users) {
    if (user.premiumUser) {
        console.log(`${user.name} (${user.age})は、プレミアムユーザーです`);
    }
    else {
        console.log(`${user.name} (${user.age})は、一般ユーザーです`);
    }
}
