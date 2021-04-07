<template>
  <div id="app">
    <div>
      <h1>部分Demo</h1>
    </div>
    <div>
      <el-button type="primary">primary 按钮</el-button>
      <el-button>默认按钮</el-button>
      <el-button disabled>disabled 按钮</el-button>
      <p>
        <el-button type="success">success 按钮</el-button>
        <el-button type="danger">danger 按钮</el-button>
      </p>
    </div>
    <div style="width: 200px">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-menu-item index="1">
          <i class="el-icon-menu"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item-group>
          <template slot="title">会员管理</template>
          <el-menu-item index="2-1">
            <i class="el-icon-menu"></i>
            <span slot="title">会员列表</span>
          </el-menu-item>
          <el-menu-item index="2-2">
            <i class="el-icon-menu"></i>
            <span slot="title">会员开户</span>
          </el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <template slot="title">代理管理</template>
          <el-menu-item index="3-1">
            <i class="el-icon-menu"></i>
            <span slot="title">代理列表</span>
          </el-menu-item>
          <el-menu-item index="3-2">
            <i class="el-icon-menu"></i>
            <span slot="title">代理开户</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-menu>
    </div>
    <div style="width: 600px">
      <el-input
        v-model="t"
        placeholder="您最低存款金额20元，最高存款金额50000元"
      />
    </div>
    <div>
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-divider direction="vertical" />
      <el-select size="medium" v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>
    <div>
      <el-date-picker
        v-model="date"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
      />
    </div>
    <div>
      <el-pagination background layout="prev, pager, next" :total="1000" />
    </div>
    <div>
      <el-tabs v-model="activeName">
        <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
        <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth"
          >定时任务补偿</el-tab-pane
        >
      </el-tabs>
    </div>
    <div>
      <Form />
    </div>
    <div>
      <h3>Tips</h3>
      涉及宽度定制组件及不同规格字号考虑封装成属性配置项
    </div>
    <div class="readme">
      <h1>代理中心UI规范</h1>
      <ul>
        <li>
          <h4>根据现有设计规范，组件化主题一共可分为</h4>
          <ul>
            <li>PC（基于ElementUI）</li>
            <li>
              H5（基于VantUI）
              <p>
                对以上两种类别的颜色分类又可分为
                黑金（金色为主体色）、白金、白蓝、白橙 4种风格配色
              </p>
              <p>其中H5需要对VantUI组件库做风格兼容</p>
              <p>因不涉及动态主题切换，可预设以上4种风格配色的配置文件供选择</p>
            </li>
          </ul>
        </li>
        <li>
          <h2>方案：</h2>
          <h4>
            采用SCSS变量 + CSS3变量结合，完成基于 ElementUI
            实现的全局颜色配置及组件预设的风格化统一
          </h4>
          <ul>
            <li>
              优势
              <h4>
                对比Element官方提供方案提供了更多可配置项，增加了配置粒度。
              </h4>
              <h4>
                对比单独使用SCSS变量方案，引入CSS3变量后在各页面组件上可以直接使用var(--xxx)引用全局变量，无需利用webpack对变量文件做动态引入，也减少了生成的冗余代码，且在F12控制台可以实时查看已有的全局变量列表，省去每次使用去变量文件查看的步骤。
              </h4>
            </li>
          </ul>
        </li>
        <li>
          <h2>实现（方案落实后将出完善文档）：</h2>
          <ul>
            <li>root.scss文件配置全局色值及属性变量；</li>
            <li>
              variables.scss使用上述的部分变量及对Element组件库官方提供变量不满足情况下的覆写。
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div>
      <img src="./assets/img1.png" />
      <img src="./assets/img2.png" />
    </div>
    <div>Github: https://github.com/Aaminly/ElementUI-Theme</div>
  </div>
</template>

<script>
import Form from "./Form";
export default {
  name: "App",
  components: {
    Form,
  },
  data() {
    return {
      t: "",
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      value: "",
      date: "",
      activeName: "first",
    };
  },
};
</script>

<style lang="scss">
#app {
  color: #fff;
  margin: 60px 0;
  > div {
    margin: 50px auto 0;
    max-width: 800px;
    img {
      width: 800px;
    }
  }
  .readme {
    line-height: 2;
  }
}
</style>
