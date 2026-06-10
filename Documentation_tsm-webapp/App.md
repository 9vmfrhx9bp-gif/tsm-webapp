#component #root

# Import

| Components    | Libraries | Hooks     | Types        |
| ------------- | --------- | --------- | ------------ |
| [[Homepage]]  | Swal      | useState  | [[Auftritt]] |
| [[NavBar]]    | Axios     | useEffect | [[Editable]] |
| [[Auftritte]] | Router    |           |              |
| [[Vip]]       | Bootstrap |           |              |
| [[Buchen]]    |           |           |              |

# Interfaces
--

# Variablen
*Default*
- Type = [[Auftritt]]

# States
*auftritte*
- Type = [[Auftritt]] Array
- alle aktuellen Auftritte

*edit*
- Type = [[Editable]]
- aktuell editierbarer Auftritt

*defaultForm*
- Type = Auftritt
- Default [[Vip]] Form
- standard auf Default Variable

*useEffect*
- fragt einmalig alle Auftritte vom Backend ab (API: "http://localhost:8080/auftritte)

# Functions
## handleSafeData
Parameter: newAuftritt :Auftritt
1. prüft ob *newAuftritt* editierbar ist 
	1. ja: weitergabe an Update Endpoint des Backend
	2. ruft *updateData* mit Argument *newAuftritt* auf **return**
2. prüft ob der Titel von *newAuftritt* schon im state *auftritte* vorkommt
	1. ja: gibt Swal Fehlermeldung zurück **return**
3. fügt *newAuftritt* in *auftritte* ein
4. sendet *newAuftritt* an safeAuftritt Endpoint des Backend

## deleteData
Parameter: index :number
1. initialisiert key mit id des Auftritts an der Stelle *index* im Array
2. übergibt *key* als PathVariable an den deleteAuftritt Endpoint des Backend
3. Filtert die Auftritte deren index ungleich dem übergebene index ist

## onEdit
Parameter: title :String
1. setzt den Auftritt mit dem entsprechenden Titel auf editierbar im edit State
2. initialisiert *update* mit dem Auftritt mit dem entsprechenden Titel
3. prüft ob *update* vorhanden ist
	1. ja: wird als Default gesetzt

## updateData
Parameter: updateAuftritt :Auftritt
1. aktualisiert *auftritte* mit *updateAuftritt*
2. setzt *edit* wieder auf default
3. setzt *defaultForm* auf *Default* Variable

# Render
- Navbar
- Homepage
- Vip => *auftritte, deleteData, handleSafeData, onEdit, defaultForm*
- Auftritte => *auftritte* 