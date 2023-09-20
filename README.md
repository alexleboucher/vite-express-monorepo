To make ESLint Extension work, you need to add in the extenstion settings : 
```json
{
    "eslint.workingDirectories": [
        { "directory": "apps/api", "changeProcessCWD": true },
        { "directory": "apps/web", "changeProcessCWD": true },
    ]
}
```