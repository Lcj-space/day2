# @talentui/cz-project-changelog

Status:
Part of the [commitizen](https://github.com/commitizen/cz-cli) family. Prompts for [conventional changelog](https://github.com/stevemao/conventional-changelog-angular/blob/master/index.js) standard.

# 项目提交的changelog

## czconfig.json
在项目根目录添加czconfig.json可以预置项目变更影响范围(scope)，格式如下, 如果不添加测需要开发者拖动输入，建议使用预置的scope

```json
[
    {
        "name":"会议室预定",
        "value": "meeting"
    },
    {
        "name": "PageBuilder",
        "value": "pagebuilder"
    }
]
```


