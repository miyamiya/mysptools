/**
 * Get listId and listItemId
 * 
 * @param void
 * @return object   object.listId, object.itemId
 * @example         var listInfo = _function_GetListItemInfo(); console.log(listInfo.listId);
 */
function myspUtil_function_GetListItemInfo()
{
    var listId = null;
    var itemId = null;

    if (_spPageContextInfo.pageItemId === -1) {
        forList();
    } else {
        forPage();
    }
    return { listId: listId , itemId: itemId }

    function forPage()
    {
        if (SP.ListOperation.Selection.getSelectedItems().length <= 0) {
            listId = null;
            itemId = null;
            return;
        }

        listId = SP.ListOperation.Selection.getSelectedList();
        itemId = getItemIds();
    }
    function forList()
    {
        listId = _spPageContextInfo.listId;

        itemId = [];
        itemId[0] = SP.ScriptHelpers.getDocumentQueryPairs().ID;

        if(itemId[0] === undefined) {
            if (SP.ListOperation.Selection.getSelectedItems().length <= 0) {
                itemId = null;
                return;
            }
            itemId = getItemIds();
        }
    }
    /**
     * Get ID of selected items
     * 
     * @return array         ID of selected items
     */
    function getItemIds()
    {
        var ids = [];
        for(var i = 0; i < SP.ListOperation.Selection.getSelectedItems().length; i++) {
            ids[i] = SP.ListOperation.Selection.getSelectedItems()[i].id;
        }
        return ids;
    }
}