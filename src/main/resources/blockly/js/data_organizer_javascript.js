Blockly.Msg.LIST_HUE = "#38705d"
Blockly.Msg.MAP_HUE = "#17bf9e"
Blockly.Msg.OBJECT_HUE = "#105948"
Blockly.Msg.COMMON_HUE = "#20836c"

class FieldForLoopVariableName extends Blockly.FieldTextInput {
    doClassValidation_(newValue) {
        if (typeof newValue != 'string') {
            return null;
        }

        if (!newValue.match(/^([a-zA-Z_$][a-zA-Z\d_$]*)$/)) {
            return null;
        }

        if (["_listValueIterator", "_mapEntryIterator", "entity", "sourceentity", "immediatesourceentity", "damagesource", "direction",
        "blockstate", "itemstackiterator", "itemstack", "dimension", "entityiterator", "_blockstateValue", "_booleanValue","_directionValue",
         "_entityValue", "_itemstackValue", "_listValue", "_mapValue", "_doubleValue", "_stringValue", "var"].includes(newValue)) {
            return null;
        }

        return newValue;
    }
}

Blockly.fieldRegistry.register('field_forloop_var_name', FieldForLoopVariableName);