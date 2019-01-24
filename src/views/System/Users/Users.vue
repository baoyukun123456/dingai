<template>
	<div>
		<Def></Def>
		<el-card class="box-card">
			<el-row :span="24" style="margin-bottom:20px; float:left;">
			<el-col :span="18">
				<el-button size="small" type="primary" @click="add" style="margin-right:10px;">新增</el-button>
				<el-dialog
				title="新建用户"
				:visible.sync="dialogVisible"
				width="40%"
				:before-close="handleClose">
					<el-form ref="form" :model="form" label-width="80px" size="small">
						<el-row :span="24">
							<el-col :span="12">
								<el-form-item label="用户名" required=true>
									<el-input v-model="form.name" required placeholder="邮箱账号"></el-input>
								</el-form-item>
							</el-col>
							<el-col :span="12">
								<el-form-item label="密码" required=true>
									<el-input v-model="form.name" placeholder="密码"></el-input>
								</el-form-item>
							</el-col>
							<el-col :span="12">
								<el-form-item label="姓名" required=true>
									<el-input v-model="form.name" placeholder="姓名"></el-input>
								</el-form-item>
							</el-col>
							<el-col :span="12">
								<el-form-item >
										<el-checkbox label="是否允许手工盘点" name="type"></el-checkbox>
								</el-form-item>
							</el-col>
						</el-row>
					</el-form>
					<span slot="footer" class="dialog-footer">
						<span style="float:left;color:red;font-size:14px;">*新建用户后需要分配角色才能使用</span>
						<el-button @click="dialogVisible = false" size="small">取 消</el-button>
						<el-button type="primary" @click="dialogVisible = false" size="small">保 存</el-button>
					</span>
				</el-dialog>
				<!-- 编辑 -->
							<el-button size="small" @click="dialogVisible1 = true" style="margin-right:10px;">编辑</el-button>
				<el-dialog
				title="新建用户"
				:visible.sync="dialogVisible1"
				width="40%"
				:before-close="handleClose1">
					<el-form ref="form" :model="form1" label-width="80px" size="small">
						<el-row :span="24">
							<el-col :span="12">
								<el-form-item label="用户名" required=true>
									<el-input v-model="form1.name1" required placeholder="邮箱账号"></el-input>
								</el-form-item>
							</el-col>
							<el-col :span="12">
								<el-form-item label="密码" required=true>
									<el-input v-model="form1.name1" placeholder="密码"></el-input>
								</el-form-item>
							</el-col>
							<el-col :span="12">
								<el-form-item label="姓名" required=true>
									<el-input v-model="form1.name1" placeholder="姓名"></el-input>
								</el-form-item>
							</el-col>
							<el-col :span="12">
								<el-form-item >
										<el-checkbox label="是否允许手工盘点" name="type" checked></el-checkbox>
								</el-form-item>
							</el-col>
						</el-row>
					</el-form>
					<span slot="footer" class="dialog-footer">
						<span style="float:left;color:red;font-size:14px;">*新建用户后需要分配角色才能使用</span>
						<el-button @click="dialogVisible1 = false" size="small">取 消</el-button>
						<el-button type="primary" @click="dialogVisible1 = false" size="small">保 存</el-button>
					</span>
				</el-dialog>
				<!-- 分配角色 -->
				<el-button size="small" @click="open" style="margin-right:10px;">分配角色</el-button>
				<el-dialog
				title="分配角色"
				:visible.sync="NoTableVisible"
				width="40%"
				:before-close="handleClose">
					<span>请选择用户</span>
					<span slot="footer" class="dialog-footer">
						<el-button type="primary" @click="NoTableVisible = false" size="small">确 定</el-button>
					</span>
				</el-dialog>
				<el-dialog
				title="分配角色"
				:visible.sync="OneTableVisible"
				width="40%"
				:before-close="handleClose">
					<span>每次只能处理一条数据</span>
					<span slot="footer" class="dialog-footer">
						<el-button type="primary" @click="OneTableVisible = false" size="small">确 定</el-button>
					</span>
				</el-dialog>
				<el-dialog
				title="分配角色"
				:visible.sync="YesTableVisible"
				width="40%"
				:before-close="handleClose">
					<el-form ref="form" :model="form2" label-width="80px" size="small">
						<el-row :span="24">
							<el-col :span="12">
								<el-form-item label="用户名" required=true>
									<el-input v-model="form2.name2" required placeholder="邮箱账号"></el-input>
								</el-form-item>
							</el-col>
							<el-col :span="12">
								<el-form-item label="密码" required=true>
									<el-input v-model="form2.name2" placeholder="密码"></el-input>
								</el-form-item>
							</el-col>
							<el-col :span="12">
								<el-form-item label="姓名" required=true>
									<el-input v-model="form2.name2" placeholder="姓名"></el-input>
								</el-form-item>
							</el-col>
							<el-col :span="12">
								<el-form-item >
										<el-checkbox label="是否允许手工盘点" name="type" checked></el-checkbox>
								</el-form-item>
							</el-col>
						</el-row>
					</el-form>
					<span slot="footer" class="dialog-footer">
						<span style="float:left;color:red;font-size:14px;">*新建用户后需要分配角色才能使用</span>
						<el-button @click="YesTableVisible = false" size="small">取 消</el-button>
						<el-button type="primary" @click="save" size="small">保 存</el-button>
					</span>
				</el-dialog>
				<!-- 数据权限 -->
				<el-button size="small" @click="open" style="margin-right:10px;">数据权限</el-button>
				<el-dialog
				title="数据权限"
				:visible.sync="NoTableVisible"
				width="40%"
				:before-close="handleClose">
					<span>请选择用户</span>
					<span slot="footer" class="dialog-footer">
						<el-button type="primary" @click="NoTableVisible = false" size="small">确 定</el-button>
					</span>
				</el-dialog>
				<el-dialog
				title="数据权限"
				:visible.sync="OneTableVisible"
				width="40%"
				:before-close="handleClose">
					<span>每次只能处理一条数据</span>
					<span slot="footer" class="dialog-footer">
						<el-button type="primary" @click="OneTableVisible = false" size="small">确 定</el-button>
					</span>
				</el-dialog>
				<el-dialog
				title="数据权限"
				:visible.sync="YesTableVisible"
				width="40%"
				:before-close="handleClose">
					<el-form ref="form" :model="form3"  size="small">
						<el-row :span="24">
							<el-col :span="24">
								<el-form-item label="用户账户">
									<el-input v-model="form3.name3"  disabled size="small"></el-input>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="用户名称" >
									<el-input v-model="form3.name3" disabled></el-input>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-form-item label="公司部门授权">
									<el-input v-model="form3.name3" ></el-input>
								</el-form-item>
							</el-col>
							<el-col :span="18">
								<el-form-item label="资产类别授权">
									<el-input v-model="form3.name3" ></el-input>
								</el-form-item>
							</el-col>
							<el-col :span="18">
								<el-form-item label="区域授权">
									<el-input v-model="form3.name3"  placeholder="多选"></el-input>
								</el-form-item>
							</el-col>
							<el-col :span="18">
								<el-form-item label="仓库授权">
									<el-input v-model="form3.name3" placeholder="多选"></el-input>
								</el-form-item>
							</el-col>
						</el-row>
					</el-form>
					<span slot="footer" class="dialog-footer">
						<span style="float:left;color:red;font-size:14px;font-weight:100;">注：如果不限制数据权限，保留空白即可。</span>
						<el-button @click="YesTableVisible = false" size="small">取 消</el-button>
						<el-button type="primary" @click="save" size="small">保 存</el-button>
					</span>
				</el-dialog>
				<el-button size="small" @click="down" style="margin-right:10px;">下载操作日志</el-button>
				<el-dialog
				title="下载操作日志"
				:visible.sync="downdialogVisible"
				width="40%"
				:before-close="handleClose">
					<span>当前功能仅支持付费用户使用。升级成为付费用户可以体验更多的高级功能！</span>
					<span slot="footer" class="dialog-footer">
						<el-button type="primary" @click="handleClose" size="small">关 闭</el-button>
					</span>
				</el-dialog>
				<el-button size="small" @click="tishi" style="margin-right:10px;">变更成超级管理员</el-button>
				<el-dialog
				title="提示"
				:visible.sync="tishidialogVisible"
				width="40%"
				:before-close="handleClose">
					<span>您选择的管理员将变更为超级管理员，确定后请重新登录。</span>
					<span slot="footer" class="dialog-footer">
						<el-button type="primary" @click="tishidialogVisible=false" size="small">取消</el-button>
						<el-button type="primary" @click="tishidialogVisible=false" size="small">确定</el-button>
					</span>
				</el-dialog>
			</el-col>
			<el-col :span="6">
				<el-autocomplete
				popper-class="my-autocomplete"
				v-model="state3"
				:fetch-suggestions="querySearch"
				placeholder="请输入内容"
				@select="handleSelect"
				size="small"
				style="float:right;">
				<i
					class="el-icon-edit el-input__icon"
					slot="suffix"
					@click="handleIconClick">
				</i>
				<template slot-scope="{ item }">
					<div class="name">{{ item.value }}</div>
					<span class="addr">{{ item.address }}</span>
				</template>
				</el-autocomplete>
			</el-col>
			</el-row>
			<template>
			<el-table
				ref="multipleTable"
				:data="tableData3"
				tooltip-effect="dark"
				style="width: 100%"
				border=true
				@selection-change="handleSelectionChange">
				<el-table-column
				type="selection"
				width="55">
				</el-table-column>
				<el-table-column
				prop="user-name"
				label="用户名">
				</el-table-column>
				<el-table-column
				prop="name"
				label="姓名">
				</el-table-column>
				<el-table-column
				prop="manager"
				label="管理员"
				show-overflow-tooltip>
				</el-table-column>
				<el-table-column
				prop="if-no"
				label="是否允许手工盘点">
				</el-table-column>
			</el-table>
			</template>
		</el-card>

	</div>
</template>



<script>
	import Def from "@/components/daBreadcrumb"
	export default{
		name:"system",
		components:{
			Def,
		},
		 data() {
			return {
				//新增数据
				form:{
					name:"",
				},
				dialogVisible: false,
				// 编辑数据
				form1:{
					name1:"",
				},
				dialogVisible1: false,
				// 分配角色
				NoTableVisible:false,
				form2:{
					name2:"",
				},
				// 数据权限
				form3:{
					name3:"",
				},
				// 下载日志


				//超管
				tishidialogVisible:false,
				dialogVisible2: false,
				restaurants: [],
				state3: '',
				 tableData3: [{
				"id":1,
            "bar_code":"03010001",
            "name":"索尼手机",
            "type_id":"02",
            "specification":"索尼3000",
            "sn":49090343,
            "metering":"台",
            "money":2980,
            "company":"光威",
            "department":"",
            "purchase_time":"2018-06-08",
            "user_id":1001,
            "manager_id":102,
            "address":"办公室北区",
            "duration_use":"",
            "source":"购入",
            "remarks":"",
            "image":"http://placeholder.qiniudn.com/200x200",
            "supplier":"索尼赛格旗舰店",
            "contacts":"张素芳",
            "tell":13131312323,
            "expiry_time":"2019-06-08",
            "explain":"",
            "name": "张三",
            "user-name":"悲伤蛙悲伤",
            "manager":"admin",
            "if-no":"是"
        },
        {
            "id":2,
            "bar_code":"03010011",
            "name":"索尼照相机",
            "type_id":"03",
            "specification":"索尼3000",
            "sn":49090343,
            "metering":"台",
            "money":280,
            "company":"南京",
            "department":"",
            "purchase_time":"2018-06-07",
            "user_id":1001,
            "manager_id":102,
            "address":"办公室北区",
            "duration_use":"",
            "source":"购入",
            "remarks":"",
            "image":"http://placeholder.qiniudn.com/200x200",
            "supplier":"索尼赛格旗舰店",
            "contacts":"张素芳",
            "tell":13131312323,
            "expiry_time":"2019-06-08",
            "explain":"",
            "name": "李四",
            "user-name":"悲伤蛙不悲伤",
            "manager":"admin",
            "if-no":"是"
				}],
				multipleSelection: [],
				NoTableVisible:false,
				YesTableVisible:false,
				OneTableVisible:false,
				downdialogVisible:false,
				tishidialogVisible:false
						
			};
		},
		methods: {
				//新增
				handleClose() {
					this.dialogVisible = false
					this.NoTableVisible=false
					this.YesTableVisible=false
				this.tishidialogVisible=false
					this.downdialogVisible=false



				},
				add(){
					this.dialogVisible = true
				},
				//编辑
				handleClose1() {
						this.dialogVisible1 = false
					},
				//分配角色
				save(){
					// 保存
					this.YesTableVisible=false
				},
				// 下载日志
				down(){
					this.downdialogVisible=true
				},
				//超管
				tishi(){
					this.tishidialogVisible=true
				},
				
				handleClose2() {
						this.dialogVisible2 = false
					},
				 handleSelectionChange(val) {
					//   console.log(val)
					this.multipleSelection = val;
					console.log(this.multipleSelection.length)
						},
				
				open() {
						if(this.multipleSelection.length==0){
							this.NoTableVisible=true;
						}else if(this.multipleSelection.length==1){
							// JSON.parse(jsonstr); //可以将json字符串转换成json对象 
							// JSON.stringify(jsonobj); //可以将json对象转换成json字符串 
							this.YesTableVisible = true;
						}else{
							console.log("no")
							this.OneTableVisible = true;
						}
					},
			querySearch(queryString, cb) {
				var restaurants = this.restaurants;
				var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
				// 调用 callback 返回建议列表的数据
				cb(results);
			},
			createFilter(queryString) {
				return (restaurant) => {
				return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
				};
			},
			loadAll() {
				return [
				{ "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
				{ "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
				{ "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
				{ "value": "泷千家(天山西路店)", "address": "天山西路438号" },
				{ "value": "胖仙女纸杯蛋糕（上海凌空店）", "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101" },
				{ "value": "贡茶", "address": "上海市长宁区金钟路633号" },
				{ "value": "豪大大香鸡排超级奶爸", "address": "上海市嘉定区曹安公路曹安路1685号" },
				{ "value": "茶芝兰（奶茶，手抓饼）", "address": "上海市普陀区同普路1435号" },
				{ "value": "十二泷町", "address": "上海市北翟路1444弄81号B幢-107" },
				{ "value": "星移浓缩咖啡", "address": "上海市嘉定区新郁路817号" },
				{ "value": "阿姨奶茶/豪大大", "address": "嘉定区曹安路1611号" },
				{ "value": "新麦甜四季甜品炸鸡", "address": "嘉定区曹安公路2383弄55号" },
				{ "value": "Monica摩托主题咖啡店", "address": "嘉定区江桥镇曹安公路2409号1F，2383弄62号1F" },
				{ "value": "浮生若茶（凌空soho店）", "address": "上海长宁区金钟路968号9号楼地下一层" },
				{ "value": "NONO JUICE  鲜榨果汁", "address": "上海市长宁区天山西路119号" },
				{ "value": "CoCo都可(北新泾店）", "address": "上海市长宁区仙霞西路" },
				{ "value": "快乐柠檬（神州智慧店）", "address": "上海市长宁区天山西路567号1层R117号店铺" },
				{ "value": "Merci Paul cafe", "address": "上海市普陀区光复西路丹巴路28弄6号楼819" },
				{ "value": "猫山王（西郊百联店）", "address": "上海市长宁区仙霞西路88号第一层G05-F01-1-306" },
				{ "value": "枪会山", "address": "上海市普陀区棕榈路" },
				{ "value": "纵食", "address": "元丰天山花园(东门) 双流路267号" },
				{ "value": "钱记", "address": "上海市长宁区天山西路" },
				{ "value": "壹杯加", "address": "上海市长宁区通协路" },
				{ "value": "唦哇嘀咖", "address": "上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元" },
				{ "value": "爱茜茜里(西郊百联)", "address": "长宁区仙霞西路88号1305室" },
				{ "value": "爱茜茜里(近铁广场)", "address": "上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺" },
				{ "value": "鲜果榨汁（金沙江路和美广店）", "address": "普陀区金沙江路2239号金沙和美广场B1-10-6" },
				{ "value": "开心丽果（缤谷店）", "address": "上海市长宁区威宁路天山路341号" },
				{ "value": "超级鸡车（丰庄路店）", "address": "上海市嘉定区丰庄路240号" },
				{ "value": "妙生活果园（北新泾店）", "address": "长宁区新渔路144号" },
				{ "value": "香宜度麻辣香锅", "address": "长宁区淞虹路148号" },
				{ "value": "凡仔汉堡（老真北路店）", "address": "上海市普陀区老真北路160号" },
				{ "value": "港式小铺", "address": "上海市长宁区金钟路968号15楼15-105室" },
				{ "value": "蜀香源麻辣香锅（剑河路店）", "address": "剑河路443-1" },
				{ "value": "北京饺子馆", "address": "长宁区北新泾街道天山西路490-1号" },
				{ "value": "饭典*新简餐（凌空SOHO店）", "address": "上海市长宁区金钟路968号9号楼地下一层9-83室" },
				{ "value": "焦耳·川式快餐（金钟路店）", "address": "上海市金钟路633号地下一层甲部" },
				{ "value": "动力鸡车", "address": "长宁区仙霞西路299弄3号101B" },
				{ "value": "浏阳蒸菜", "address": "天山西路430号" },
				{ "value": "四海游龙（天山西路店）", "address": "上海市长宁区天山西路" },
				{ "value": "樱花食堂（凌空店）", "address": "上海市长宁区金钟路968号15楼15-105室" },
				{ "value": "壹分米客家传统调制米粉(天山店)", "address": "天山西路428号" },
				{ "value": "福荣祥烧腊（平溪路店）", "address": "上海市长宁区协和路福泉路255弄57-73号" },
				{ "value": "速记黄焖鸡米饭", "address": "上海市长宁区北新泾街道金钟路180号1层01号摊位" },
				{ "value": "红辣椒麻辣烫", "address": "上海市长宁区天山西路492号" },
				{ "value": "(小杨生煎)西郊百联餐厅", "address": "长宁区仙霞西路88号百联2楼" },
				{ "value": "阳阳麻辣烫", "address": "天山西路389号" },
				{ "value": "南拳妈妈龙虾盖浇饭", "address": "普陀区金沙江路1699号鑫乐惠美食广场A13" }
				];
			},
			handleSelect(item) {
				console.log(item);
			},
			handleIconClick(ev) {
				console.log(ev);
			}
			},
			mounted() {
			this.restaurants = this.loadAll();
			}
	}
</script>

<style>
li {
    line-height: normal;
    padding: 7px;
  }
  .addr {
      font-size: 12px;
      color: #e7e5e5;
    }
.name {
      text-overflow: ellipsis;
      overflow: hidden;
    }
  .highlighted .addr {
      color: #ddd;
    }
	.el-dialog__header{
		background:#409EFF;
		color:#303133;
	}
	.el-icon-close{
		color:#fff!important;
	}
	.el-dialog__title{
		color:#fff!important;
	}
	.el-form-item__label{
		width:120px!important;
	}
	.el-input{
		width:60%;
		float:left;
	}
</style>