# foundations

计算机基础回顾的 **R0：短准备与软件设计**。通过规格、测试、抽象和最小工具实践，为 CSAPP 与操作系统学习做准备。

本仓库保存本阶段的详细笔记、独立练习、测试与成果记录；[self-Learning 主仓库](https://github.com/W-yf/self-Learning) 保存总计划、总进度与统一复习队列。本 README 是本课程的状态入口。

## 范围与验收

固定参考 **MIT 6.031 Spring 2022** 的四份讲义：[Testing](https://web.mit.edu/6.031/www/sp22/classes/03-testing/)、[Specifications](https://web.mit.edu/6.031/www/sp22/classes/06-specifications/)、[Abstract Data Types](https://web.mit.edu/6.031/www/sp22/classes/10-abstract-data-types/)、[Abstraction Functions & Rep Invariants](https://web.mit.edu/6.031/www/sp22/classes/11-abstraction-functions-rep-invariants/)。使用 C/C++ 自拟练习，并按主题采用 Python 公开项目。用户明确不学习 Java，不安排 Java 补课、原版 Java 编程作业或 Java 评分器；相应知识通过独立练习验证。旧 MITx 视频按主题辅助理解，定义与版本差异以 2022 讲义为准；TypeScript 只按阅读需要解释，不自动新增语言课程。既有笔记保留当时实际使用的 2016 来源。

| 任务 | 完成证据 |
|---|---|
| R0-01 最小环境与起点 | 验证 C/C++ 编译运行、GDB 单步与 Python 测试；用自拟 C 小程序核对指针、数组、结构体及分配/释放，记录缺口 |
| R0-02 规格与测试 | 读 Testing、Specifications；为非负权有向图写接口约定和契约测试，涵盖增删点、设置边权、查询邻居 |
| R0-03 抽象与实现 | 读 ADT、抽象函数与表示不变量；用邻接表和边列表实现同一接口，并通过同一套契约测试 |

图的边界需明确重复节点、缺失节点、自环、负权输入和返回值所有权。验证修改返回的邻居集合不会改变内部图状态，并说明两种表示的不变量及替换依据。这些设计决定留在学习过程中独立完成。

**理论与实验同等重要**：既记录独立解释、推导与边界分析，也记录实现、调试和测试证据；区分独立产出与 AI 提示后的产出。约 12 小时仅为主计划的估时基线，实际用时按证据校准。

不扩展 GUI、持久化、图算法、完整 C++ 复习或系统 CMake 课程。完成本阶段验收后，由主仓库确认进入 CSAPP。完整范围与资料由主仓库的 [LEARNING_PLAN](https://github.com/W-yf/self-Learning/blob/main/LEARNING_PLAN.md) 和 [RESOURCES](https://github.com/W-yf/self-Learning/blob/main/RESOURCES.md) 维护。

## 当前状态

```yaml
last_updated: 2026-09-14
course_id: R0
repository_name: foundations
repository_url: https://github.com/W-yf/foundations
repository_role: course
branch: main
setup_status: remote_repository_initialized
learning_status: testing_in_progress_r0_01_pending_personal_computer
environment_verification: pending_personal_computer
theory_evidence: testing_limits_example_discussed
lab_evidence: none
remote_status: configured
sync_status: verify_head_against_origin_main
initial_published_commit: 94d2d4b3bf0b9cbe258db5e82bc84546fe04a345
initial_publish_verified_on: 2026-09-10
overview_sync_status: see_main_repository_status
handoff_status: repository_readme_is_current_entry
next_task: due_review_then_testing_test_first_programming
```

当前处于 Testing 入门：已讨论测试的作用与边界，尚未确认 Test-first Programming 阅读完成，下一步继续该小节。正式项目作业尚未启动。schedule（标签 1.2.2）的 teach 导读 01 已备好，留待相关理论与小练习完成后使用；未记录为已阅读或掌握。R0-01 环境验证和所有实验留待个人电脑完成；理论与实验分别验收，尚无完整 R0 验收。

本 README 是当前交接入口，旧临时开课快照已过时，无需携带。环境初查见 [日志](logs/2026-09-10.md)；主仓库 [STATUS](https://github.com/W-yf/self-Learning/blob/main/STATUS.md) 登记已核对的课程提交。两仓库是否同步，以本地 HEAD 和远程 main 的实际比较为准。

## 学习笔记与成果入口

`notes/` 只保存课程知识和个人理解，必要时附来源、边界与例子；`exercises/` 保存实现与验证。学习时不逐题改文件，小节结束后整理，课程结束时统一审校、去重和精简。问答流水、提示过程与教学评语不写入笔记或另存为学习日志。

| 主题 | 内容 |
|---|---|
| [Testing：测试的作用与边界](notes/testing.md) | 测试通过的含义、反例与相等输入示例 |
| [schedule 导读 01](lessons/0001-schedule-registration.html) · [术语速查](reference/schedule-basics.html) | 后续备用的 AI 教学材料；未启动阅读或项目作业 |

关键结论以课程原文或官方资料为依据；个人理解忠实于实际表达，不把 AI 补充写成独立产出。README 只保留接续所需的进度和下一步，主仓库维护摘要与统一复习。文件整理不代表课程验收完成。

## 个人电脑接续

1. 在已有的 `self-Learning` 和 `foundations` 本地仓库中分别执行 `git pull --ff-only`，先确认没有会被覆盖的本地改动。有分叉时核对处理，不强制覆盖。
2. 读取主仓库 [STATUS](https://github.com/W-yf/self-Learning/blob/main/STATUS.md)、两仓库 AGENTS、本 README 和 [Testing 笔记](notes/testing.md)。最近一次复习为 2026-09-11，三题下次日期均为 2026-09-12；截至 2026-09-14 已到期。正式学习前读取主仓库 REVIEW 和题库，一次一道不同场景的具体代码题。本次仅整理同步，未完成新的复习或学习日。
3. 个人电脑先检查已有系统与 C/C++、GDB、Python 环境，保留可用配置；虚拟机或 WSL2 尚未选定，不据此前电脑的检查结果推断本机状态。环境验证未完成前仍可继续理论阅读。
4. 理论下一步：学习 [Testing](https://web.mit.edu/6.031/www/sp22/classes/03-testing/) 的 **Test-first Programming**，到 **Systematic testing** 标题前停止；可配合 [视频 P21](https://www.bilibili.com/video/BV1Tp4y197XX/?p=21) 的 Test-first Programming 部分，再做一道新的具体小题。随后按主题继续分区、边界与测试方法，再衔接 Specifications。能够独立说明约定、选择代表性输入并确定预期结果后，再进行作业所需的项目导读与限定改动。schedule 多标签查询仍是自拟练习候选，既有 R0 图练习验收尚未调整。

5. 实验下一步：完成 R0-01 的编译运行、GDB 单步与 Python 测试验证，再独立编写自拟 C 小程序检查指针、数组、结构体及分配/释放。不得把环境检查或知识笔记当作实验完成。

小节结束整理笔记，本轮结束或交接时更新必要进度并同步两仓库。学习接续不需要复制聊天或临时交接文件；编译器、调试器和其他本机工具需在个人电脑单独核验。

本轮同步范围为上述接续信息和备用 teach 页面；发布版本以 Git 提交及主仓库课程索引为准。生成教学材料不提高掌握层级。
