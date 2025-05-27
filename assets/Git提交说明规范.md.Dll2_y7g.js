import{_ as s,c as a,o as n,a6 as t}from"./chunks/framework.3YdPo1hh.js";const g=JSON.parse('{"title":"Git提交说明规范","description":"","frontmatter":{"date":"2024-06-06T00:00:00.000Z","title":"Git提交说明规范"},"headers":[],"relativePath":"Git提交说明规范.md","filePath":"Git提交说明规范.md","lastUpdated":1744724908000}'),e={name:"Git提交说明规范.md"},p=t(`<h1 id="git提交说明规范" tabindex="-1">Git提交说明规范 <a class="header-anchor" href="#git提交说明规范" aria-label="Permalink to &quot;Git提交说明规范&quot;">​</a></h1><h2 id="说明" tabindex="-1">说明 <a class="header-anchor" href="#说明" aria-label="Permalink to &quot;说明&quot;">​</a></h2><ul><li>参照 <a href="https://juejin.cn/post/6871050102379642894" target="_blank" rel="noreferrer">https://juejin.cn/post/6871050102379642894</a></li><li>用于<code>git commit</code> 命令中<code>-m</code>参数的说明。这个说明应满足某种规范，方便知道当前提交的类别以及内容。</li></ul><h2 id="格式" tabindex="-1">格式 <a class="header-anchor" href="#格式" aria-label="Permalink to &quot;格式&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>	&lt;type&gt;(&lt;scope&gt;): &lt;subject&gt;</span></span>
<span class="line"><span>	// 空一行</span></span>
<span class="line"><span>	&lt;body&gt;</span></span>
<span class="line"><span>	// 空一行</span></span>
<span class="line"><span>	&lt;footer&gt;</span></span>
<span class="line"><span>	\`\`\`</span></span>
<span class="line"><span>- &gt; type和subject必需，scope、body、footer可选。</span></span>
<span class="line"><span>- type</span></span>
<span class="line"><span>	- | type     | 描述                                                         |</span></span>
<span class="line"><span>		| -------- | ------------------------------------------------------------ |</span></span>
<span class="line"><span>		| feat     | 新增feature                                                  |</span></span>
<span class="line"><span>		| fix      | 修复bug                                                      |</span></span>
<span class="line"><span>		| docs     | 修改文档，如readme.md                                        |</span></span>
<span class="line"><span>		| style    | 修改代码格式，不改变代码逻辑，如逗号、缩进、空格等           |</span></span>
<span class="line"><span>		| refactor | 代码重构，没有新增功能或修复bug                              |</span></span>
<span class="line"><span>		| perf     | 优化相关，如提升性能、用户体验等                             |</span></span>
<span class="line"><span>		| test     | 测试用例，包括单元测试、集成测试                             |</span></span>
<span class="line"><span>		| ci       | 修改ci配置文件或脚本，如jenkins fastlame                     |</span></span>
<span class="line"><span>		| chore    | 修改构建脚本、或者增加依赖库、工具等                         |</span></span>
<span class="line"><span>		| revert   | 回滚之前的commit                                             |</span></span>
<span class="line"><span>- scope</span></span>
<span class="line"><span>	- commit影响的范围，可以是影响的文件名、模块名、组件名、国家等</span></span>
<span class="line"><span>- subject</span></span>
<span class="line"><span>	- commit的简短描述，符合[50/72 formatting](https://link.juejin.cn?target=https%3A%2F%2Fstackoverflow.com%2Fquestions%2F2290016%2Fgit-commit-messages-50-72-formatting)</span></span>
<span class="line"><span>- body</span></span>
<span class="line"><span>	- commit的详细描述，符合[50/72 formatting](https://link.juejin.cn?target=https%3A%2F%2Fstackoverflow.com%2Fquestions%2F2290016%2Fgit-commit-messages-50-72-formatting)</span></span>
<span class="line"><span>- footer</span></span>
<span class="line"><span>	- 备注，通常是Breaking changes或者Closed issues</span></span></code></pre></div>`,5),i=[p];function l(c,o,r,d,m,h){return n(),a("div",null,i)}const u=s(e,[["render",l]]);export{g as __pageData,u as default};
