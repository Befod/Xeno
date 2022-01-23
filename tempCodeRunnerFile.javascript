const timestamp = parseInt(new Date() / 30000);

const auth = "我的密匙." + timestamp;
//把“我的密匙”4个字换成你的authkey，单引号内最后一个.要保留

const hashkey = hash("md5", auth);
