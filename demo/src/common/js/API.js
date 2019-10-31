// 1.登录
const login = '/login';
// 2.管理员
// 2.查询管理员 /findManage -post
const findManage = '/findManage';
// 1.添加管理员 /addManage -post
const addManage = '/addManage';
// 3.删除管理员 /delManage -post
const delManage = '/delManage';
// 4.更新管理员 /updateManage -post
const updateManage = '/updateManage';
// 5.修改密码 /changePassManage -post
const changePassManage = '/changePassManage';
// 3.上传图片获取token接口-getToken -get
const getToken = '/getToken';
// 4.首页轮播图 
// 1.添加轮播图 /addBanner -get
const addBanner = '/addBanner';
// 2.获取轮播图 /banner -get
const banner = '/banner';
// 3.删除轮播图 /delBanner -get
const delBanner = '/delBanner';
// 5.家教轮播图 
// 1.添加家教轮播图 /addTeacherBanner -get
const addTeacherBanner = '/addTeacherBanner';
// 2.获取轮播图 /teacherBanner -get
const teacherBanner = '/teacherBanner';
// 3.删除轮播图 /delTeacherBanner -get
const delTeacherBanner = '/delTeacherBanner';
// 6.家教类型图 
// 1.添加家教类型 /addTeacherType -get
const addTeacherType = '/addTeacherType';
// 2.获取类型 /teacherType -get
const teacherType = '/teacherType';
// 3.删除类型 /delTeacherType -get
const delTeacherType = '/delTeacherType';
// 4.更新类型 /updateTeacherType -get
const updateTeacherType = '/updateTeacherType';
// 7.家教排行 
// 1.添加家教排行 /addTeacherTop -get
const addTeacherTop = '/addTeacherTop';
// 2.获取排行 /teacherTop -get
const teacherTop = '/teacherTop';
// 3.删除排行 /delTeacherTop -get
const delTeacherTop = '/delTeacherTop';
// 4.更新排行 /updateTeacherTop -get
const updateTeacherTop = '/updateTeacherTop';
// 8.用户管理
// 1.添加用户 /addUser -post
const addUser = '/addUser';
// 2.查询用户 /findUser -post
const findUser = '/findUser';
// 3.删除用户 /delUser -post
const delUser = '/delUser';
// 4.更新用户 /updateUser -post
const updateUser = '/updateUser';
// 5.修改密码 /changePassUser -post
const changePassUser = '/changePassUser';
// 9.水站1.添加水站/addWater -get
const addWater = '/addWater';
// 2.获取水站 /findWater-get
const findWater = '/findWater';
// 3.删除水站 /delWater -get
const delWater = '/delWater';
// 4.更新水站/updateWater -get
const updateWater = '/updateWater';
// 10.水站评论1.添加水站评论/addComment -get
const addComment = '/addComment';
// 2.获取水站评论 /findComment-get
const findComment = '/findComment';
// 3.删除评论 /delComment -get
const delComment = '/delComment';
// 11.维修1.添加维修/addRepair -get
const addRepair = '/addRepair';
// 2.获取维修列表 /findRepair-get
const findRepair = '/findRepair';
// 3.删除维修 /delRepair -get
const delRepair = '/delRepair';
// 4.更新维修/updateRepair -get
const updateRepair = '/updateRepair';
// 12.维修评论1.添加维修评论/addRepairComment -get
const addRepairComment = '/addRepairComment';
// 2.获取维修评论 /findRepairComment-get
const findRepairComment = '/findRepairComment';
// 3.删除维修评论 /delRepairComment -get
const delRepairComment = '/delRepairComment';
// 13.家政轮播图 1.添加家政轮播图 /addHomeBanner -get
const addHomeBanner = '/addHomeBanner';
// 2.获取轮播图 /homeBanner -get
const homeBanner = '/homeBanner';
// 3.删除轮播图 /delHomeBanner -get
const delHomeBanner = '/delHomeBanner';
// 13.家政员工信息
// 1.添加员工信息/addHomeWorker -get
const addHomeWorker = '/addHomeWorker';
// 2.获取员工信息 /findHomeWorker-get
const findHomeWorker = '/findHomeWorker';
// 3.删除员工 /delHomeWorker -get
const delHomeWorker = '/delHomeWorker';
// 4.修改员工信息/updateHomeWorker -get
const updateHomeWorker = '/updateHomeWorker';
// 5.获取资格证书接口 /getQualification -get请求
const getQualification = '/getQualification';
// 6.获取家政服务类型 /getHomeType -get请求
const getHomeType = '/getHomeType';
// 14. 退出登录 /exit -get请求
const exit = '/exit';
export default {
    login,
    findManage,
    addManage,
    delManage,
    updateManage,
    changePassManage,
    getToken,
    addBanner,
    banner,
    delBanner,
    addTeacherBanner,
    teacherBanner,
    delTeacherBanner,
    addTeacherType,
    teacherType,
    delTeacherType,
    updateTeacherType,
    addTeacherTop,
    teacherTop,
    delTeacherTop,
    updateTeacherTop,
    addUser,
    findUser,
    delUser,
    updateUser,
    changePassUser,
    addWater,
    findWater,
    delWater,
    updateWater,
    addComment,
    findComment,
    delComment,
    addRepair,
    findRepair,
    delRepair,
    updateRepair,
    addRepairComment,
    findRepairComment,
    delRepairComment,
    addHomeBanner,
    homeBanner,
    delHomeBanner,
    addHomeWorker,
    findHomeWorker,
    delHomeWorker,
    updateHomeWorker,
    getQualification,
    getHomeType,
    exit
}