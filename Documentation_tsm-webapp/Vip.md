#component 

**Parent** = [[App]]
CSS = Vip.css

# Import

| Components         | Libraries | Hooks     | Types    |
| ------------------ | --------- | --------- | -------- |
| [[AuftrittCard]]   |           | useForm   | Auftritt |
| [[DeleteButton]]   |           | useEffect |          |
| [[SettingsButton]] |           |           |          |

# Interfaces
*VipProps*
- auftritte
- safeData
- onDelete
- onEdit
- Default

# Variablen
--

# States
*useEffect*
- resetet Default der Form immer wenn sich *Default* in [[App]] ändert

# Functions
--

# Render
*Tabelle*
- pro Zeile eine [[AuftrittCard]], einen [[DeleteButton]] und einen [[SettingsButton]]
- AuftrittCard wird aus auftritte Array gemapped (auftritt, key)
- *DeleteButton*=> id: index; onDelete: onDelete
- *SettingsButton*=>title: auftritt.title; onEdit: onEdit

*Form*
- handleSubmit: *safeData*
