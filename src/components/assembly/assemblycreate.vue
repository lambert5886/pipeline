<template>
	<Form ref="formValidate"  :label-width="120">
		<FormItem label="流水线名称" prop="name">
			<Input placeholder="请输入流水线名称" style="width: 200px"></Input>
		</FormItem>
		<FormItem label="构建保存策略">
			<Row>
				<Col>
				<span>保存构建天数</span>
				<Input style="width:50px"></Input>
				<span>保存构建的最大个数</span>
				<Input style="width:50px"></Input>
			</Col>
		</Row>
	</FormItem>
	<FormItem label="源码管理" prop="">
		<Row>
			<Col>
			<Select style="width:200px">
				<Option value="1" v-text="'ClearCase'"></Option>
				<Option value="2" v-text="'Git'"></Option>
			</Select>
		</Col>
	</Row>
	<Row>
		<Col>
		<FormItem label="选择代码工程">
			<Select style="width:200px">
				<Option value="1" >{{'BKJG/dsvc'}}</Option>
				<Option value="2" >{{'BKJG/AgileMng'}}</Option>
				<Option value="3" >{{'BKJG/PARTY-MASSES/account'}}</Option>
			</Select>
		</FormItem>
	</Col>
</Row>
<Row>
	<Col>
	<FormItem label="选择分支">
		<Select style="width:200px">
			<Option value="1" v-text="'dev'"></Option>
			<Option value="2" v-text="'master'"></Option>
			<Option value="3" v-text="'dev_03'"></Option>
		</Select>
	</FormItem>
</Col>
</Row>
</FormItem>
<FormItem label="触发条件">
	<RadioGroup v-model="trigger">
		<Radio label="gerrit">Gerrit Trigger</Radio>
		<Radio label="scm">轮询SCM</Radio>
		<Radio label="timer">定时</Radio>
	</RadioGroup>
	<div class="" v-if="trigger === 'gerrit'" >
		<Row>
			<Col>
			<FormItem label="server">
				<Select style="width:200px">
					<Option value="1" v-text="'Gerrit 128.194.10.127'"></Option>
				</Select>
			</FormItem>
		</Col>
	</Row>
	<Row>
		<Col>
		<FormItem label="server">
			<Select style="width:200px">
				<Option value="1" v-text="'BKJG/PARTY-MASSES'"></Option>
				<Option value="1" v-text="'BKJG'"></Option>
			</Select>
		</FormItem>
	</Col>
</Row>
<Row>
	<Col>
	<FormItem label="选择分支">
		<Select style="width:200px">
			<Option value="1" v-text="'dev'"></Option>
			<Option value="1" v-text="'dev_03'"></Option>
		</Select>
	</FormItem>
</Col>
</Row>
<Row>
	<Col>
	<FormItem label="触发策略">
		<CheckboxGroup>
			<Checkbox label="">提交Gerrit后</Checkbox>
			<Checkbox label="">提交Git库后</Checkbox>
		</CheckboxGroup>
	</FormItem>
</Col>
</Row>
</div>

<div v-if="trigger === 'scm'">
	<Row>
		<CheckboxGroup>
			<Checkbox label="">周一</Checkbox>
			<Checkbox label="">周二</Checkbox>
			<Checkbox label="">周三</Checkbox>
			<Checkbox label="">周四</Checkbox>
			<Checkbox label="">周五</Checkbox>
			<Checkbox label="">周六</Checkbox>
			<Checkbox label="">周日</Checkbox>
		</CheckboxGroup>
	</Row>
	<Row>
		触发时间： <TimePicker format="HH:mm" type="timerange" placement="bottom-end" placeholder="Select time" style="width: 168px"></TimePicker>
	</Row>
</div>

<div v-if="trigger === 'timer'">
	<Row>
		<CheckboxGroup>
			<Checkbox label="">周一</Checkbox>
			<Checkbox label="">周二</Checkbox>
			<Checkbox label="">周三</Checkbox>
			<Checkbox label="">周四</Checkbox>
			<Checkbox label="">周五</Checkbox>
			<Checkbox label="">周六</Checkbox>
			<Checkbox label="">周日</Checkbox>
		</CheckboxGroup>
	</Row>
	<Row>
		触发时间： <TimePicker format="HH:mm" placeholder="Select time" style="width: 112px"></TimePicker>
	</Row>
</div>
</FormItem>
<FormItem>
	<Button type="primary" @click="handleSubmit()">确定</Button>
	<Button type="ghost" @click="handleReset()" style="margin-left: 8px">重置</Button>
</FormItem>
</Form>
</template>
<script>
	export default {
		data () {
			return {
				trigger: 'gerrit'  // 触发条件
			}
		},
		methods: {
			handleSubmit (name) {
				this.$router.push({path: '/assembly/step'})
			},
			handleReset (name) {

			}
		}
	}
</script>
