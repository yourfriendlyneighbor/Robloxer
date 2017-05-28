"use strict"

const request = require('request');

var rblxApi = {};
/* Sets */
rblxApi.getUsersSet = function(id, cb){
  request('https://www.roblox.com/sets/get-by-creator?userid='+ id, (err, res, data) => {
    cb(JSON.parse(data))
  })
}
rblxApi.getUsersSubbedSets = function(id, cb){
  request('https://www.roblox.com/sets/get-subscribed?userid='+ id, (err, res, data) => {
    cb(JSON.parse(data))
  })
}

/* Indevelopment ~ Refer to api.roblox.com/docs/ */
rblxApi.getAssetsfromSet = function(id, num, page, cb){
  request('https://www.roblox.com/sets/' + id + '/items?num='+ num + '&page=' + page, (err, res, data) => {
    cb(JSON.parse(data))
  })
}

/* Images */
rblxApi.getHeadshot = function(id, cb){
  request('https://www.roblox.com/headshot-thumbnail/json?userId='+ id +'&width=180&height=180', (err, res, data) => {
    cb(JSON.parse(data))
  })
}
//Size: Small or Large
rblxApi.getPlaceThumbnail = function(id, cb){
  request('https://www.roblox.com/place-thumbnails?params=[{placeId:'+ id +'}]', (err, res, data) => {
    cb(JSON.parse(data))
  })
}
//Size: Small or Large
rblxApi.getItemThumbnail = function(id, cb){
  request('https://www.roblox.com/item-thumbnails?params=[{assetId:'+ id +'}]', (err, res, data) => {
    cb(JSON.parse(data))
  })
}
rblxApi.getAvatarThumbnail = function(id, cb){
  request('https://www.roblox.com/avatar-thumbnails?params=[{userId:'+ id +'}]', (err, res, data) => {
    cb(JSON.parse(data))
  })
}
rblxApi.getGroupThumbnail = function(id, cb){
  request('https://www.roblox.com/group-thumbnails?params=[{groupId:'+ id +'}]', (err, res, data) => {
    cb(JSON.parse(data))
  })
}

/* Clan */
rblxApi.getClanDataFromUser = function(id, cb){
  request('https://api.roblox.com/clans/get-by-user?userId='+ id, (err, res, data) => {
    cb(JSON.parse(data))
  })
}
rblxApi.getClanDataById = function(id, cb){
  request('https://api.roblox.com/clans/get-by-id?clanId='+ id, (err, res, data) => {
    cb(JSON.parse(data))
  })
}

/* Groups */
rblxApi.checkIfUserInGroup = function(userId, groupId, cb){
  request('https://assetgame.roblox.com/Game/LuaWebService/HandleSocialRequest.ashx?method=IsInGroup&playerid='+ userId + '&groupid=' + groupId, (err, res, data) => {
    cb(data)
  })
}
rblxApi.getGroupData = function(id, cb){
  request('https://api.roblox.com/groups/'+ id, (err, res, data) => {
    cb(JSON.parse(data))
  })
}
rblxApi.getGroupRoleSets = function(id, cb){
  request('http://www.roblox.com/api/groups/'+ id + '/RoleSets/', (err, res, data) => {
    cb(JSON.parse(data))
  })
}
rblxApi.getPrimary = function(name, cb){
  request('https://www.roblox.com/Groups/GetPrimaryGroupInfo.ashx?users=' + name, (err, res, data) => {
    cb(JSON.parse(data))
  })
}
rblxApi.getGroupAllies = function(groupId, cb){
  request('https://www.roblox.com/groups/'+groupId+'/allies', (err, res, data) => {
    cb(JSON.parse(data))
  })
}
rblxApi.getGroupEnemies = function(groupId, cb){
  request('https://www.roblox.com/groups/'+groupId+'/enemies', (err, res, data) => {
    cb(JSON.parse(data))
  })
}

/* Users */
rblxApi.canManageItem = function(userId, assetId, cb){
  request('http://api.roblox.com/users/'+user+'/canmanage/'+item, (err, res, data) => {
    cb(data)
  })
}
rblxApi.getUserRankNumber = function(userId, groupId, cb){
  request('https://assetgame.roblox.com/Game/LuaWebService/HandleSocialRequest.ashx?method=GetGroupRole&playerid='+ userId + '&groupid=' + groupId, (err, res, data) => {
    cb(data)
  })
}
rblxApi.getUserRankName = function(userId, groupId, cb){
  request('https://assetgame.roblox.com/Game/LuaWebService/HandleSocialRequest.ashx?method=GetGroupRole&playerid='+ userId + '&groupid=' + groupId, (err, res, data) => {
    cb(data)
  })
}
rblxApi.checkTwoFriends = function(f1, f2, cb){
  request('https://assetgame.roblox.com/Game/LuaWebService/HandleSocialRequest.ashx?method=IsFriendsWith&playerId='+f1+'&userId='+f2, (err, res, data) => {
    cb(data)
  })
}
rblxApi.getUsersFriends = function(id, cb){
  request('https://api.roblox.com/users/'+id+'/friends', (err, res, data) => {
    cb(JSON.parse(data))
  })
}
rblxApi.getFriendshipCount = function(id, cb){
  request('https://api.roblox.com/user/get-friendship-count?userId'+id, (err, res, data) => {
    cb(JSON.parse(data))
  })
}
rblxApi.checkUserFollowing = function(userId, followerId, cb){
  request('https://api.roblox.com/user/following-exists?userId='+userId+'&followerUserId='+followerId, (err, res, data) => {
    cb(JSON.parse(data))
  })
}
rblxApi.getUsersFollower = function(id, cb){
  request('https://api.roblox.com/users/followers?userId='+id, (err, res, data) => {
    cb(JSON.parse(data))
  })
}
rblxApi.getUsersFollowing = function(id, cb){
  request('https://api.roblox.com/users/followings?userId='+id, (err, res, data) => {
    cb(JSON.parse(data))
  })
}
rblxApi.idToUser = function(id, cb){
  request('https://api.roblox.com/users/'+ id, (err, res, data) => {
    cb(JSON.parse(data))
  })
}
rblxApi.userToId = function(user, cb){
  request('https://api.roblox.com/users/get-by-username?username='+ user, (err, res, data) => {
    cb(JSON.parse(data))
  })
}
rblxApi.gamesCreated = function(id, cb){
  request('https://www.roblox.com/users/profile/playergames-json?userId='+ user, (err, res, data) => {
    cb(JSON.parse(data))
  })
}
rblxApi.checkUserTaken = function(name, cb){
  request('http://www.roblox.com/UserCheck/DoesUsernameExist?username='+ user, (err, res, data) => {
    cb(JSON.parse(data))
  })
}

/* Assets */
rblxApi.getPartsOfPackage = function(pack, cb){
  request('http://assetgame.roblox.com/Game/GetAssetIdsForPackageId?packageId='+ pack, (err, res, data) => {
    cb(JSON.parse(data))
  })
}
rblxApi.checkUserHasItem = function(user, item, cb){
  request('http://api.roblox.com/Ownership/HasAsset?userId='+user+'&assetId='+item, (err, res, data) => {
    cb(data)
  })
}
rblxApi.AssetInfo = function(item, cb){
  request('http://api.roblox.com/Marketplace/ProductInfo?assetId='+item, (err, res, data) => {
    cb(JSON.parse(data))
  })
}

/* Misc */
rblxApi.getDeviceInfo = function(cb){
   request('http://api.roblox.com/reference/deviceinfo', (err, res, data) => {
     cb(JSON.parse(data))
   })
}

rblxApi.login = function(user, pass){
  request({
    url: "https://www.roblox.com/NewLogin",
    method: "POST",
    json: true,
    body: {"username": user, "password": pass}
  });
}

rblxApi.unfollow = function(followedUserId){
  request({
    url: "https://api.roblox.com/user/unfollow",
    method: "POST",
    json: true,
    body: {"followedUserId": followedUserId}
  });
}

rblxApi.follow = function(followedUserId){
  request({
    url: "https://api.roblox.com/user/follow",
    method: "POST",
    json: true,
    body: {"followedUserId": followedUserId}
  });
}

rblxApi.friend = function(recipientUserId){
  request({
    url: "https://api.roblox.com/user/request-friendship",
    method: "POST",
    json: true,
    body: {"recipientUserId": recipientUserId}
  });
}
rblxApi.unfriend = function(friendUserId){
  request({
    url: "https://api.roblox.com/user/unfriend",
    method: "POST",
    json: true,
    body: {"friendUserId": friendUserId}
  });
}

rblxApi.acceptfriend = function(requesterUserId){
  request({
    url: "https://api.roblox.com/user/accept-friend-request",
    method: "POST",
    json: true,
    body: {"requesterUserId": requesterUserId}
  });
}
rblxApi.declinefriend = function(friendUserId){
  request({
    url: "https://api.roblox.com/user/decline-friend-request",
    method: "POST",
    json: true,
    body: {"requesterUserId": requesterUserId}
  });
}


module.exports = rblxApi
