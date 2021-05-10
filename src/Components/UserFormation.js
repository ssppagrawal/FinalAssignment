
class UserData{
    constructor(name, location, websiteLink, tagCount){
        this.name = name;
        this.location = location;
        this.websiteLink = websiteLink;
        this.tagCount = tagCount;
    }
}

class UserMedals{
    constructor(reputation, goldMedal, silverMedal, bronzeMedal, profilePic){
        this.reputation = reputation;
        this.goldMedal = goldMedal;
        this.silverMedal = silverMedal;
        this.bronzeMedal = bronzeMedal;
        this.profilePic = profilePic;
    }
}

const formUserData = (userInfo, userMedalInfo)=>{
    const userData = new UserData(userInfo.display_name,userInfo.location, userInfo.website_url, userMedalInfo.length);
    const userMedalData = new UserMedals(userInfo.reputation, userInfo.badge_counts.gold, userInfo.badge_counts.silver, userInfo.badge_counts.bronze, userInfo.profile_image)
    const topTagsData = userMedalInfo.slice(0,5).map(x => {return {name: x.name, count: x.count}});

    return{userData, userMedalData, topTagsData};
};

export default formUserData;

