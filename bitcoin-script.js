/**
 * Bitcoin Transaction Script Patterns
 *
 * @author Aya Walraven
 * @version 0.1
 */
Rainbow.extend('bitcoin', [
    {
        'name': 'constants',
        'pattern': /OP_([0-9]{1,2}|FALSE|N(.)A|PUSHDATA(1|2|4){0,1}|1NEGATE|TRUE)(?!\w)/g
    },
    {
        'name': 'flowcontrol',
        'pattern': /OP_(NOP|IF|NOTIF|ELSE|ENDIF|VERIFY|RETURN)(?!\w)/g
    },
    {
        'name': 'stack',
        'pattern': /OP_(TOALTSTACK|FROMALTSTACK|IFDUP|DEPTH|DROP|DUP|NIP|OVER|PICK|ROLL|ROT|SWAP|TUCK|2DROP|2DUP|3DUP|2OVER|2ROT|2SWAP)(?!\w)/g
    },
    {
        'name': 'splice',
        'pattern': /OP_(CAT|SUBSTR|LEFT|RIGHT|SIZE)(?!\w)/g
    },
    {
        'name': 'logic',
        'pattern': /OP_(INVERT|AND|OR|XOR|EQUALVERIFY|EQUAL)(?!\w)/g
    },
    {
        'name': 'arithmetic',
        'pattern': /OP_((\d){0,1}(ADD|SUB|MUL|DIV)(?!\w)|NOT(?!\w)|0NOTEQUAL|(R|L)SHIFT|BOOL(AND|OR)|NUMEQUAL((?!\w)|(\w{6}))|NUMNOTEQUAL|(LESS|GREATER)THAN((?!\w)|OREQUAL)|(NEGATE|ABS|MIN|MAX|WITHIN|MOD))/g
    },
    
    {
        'name': 'crypto',
        'pattern': /OP_(RIPEMD160|SHA(1|256)|HASH(160|256)|CODESEPARATOR|CHECK(MULTI){0,1}SIG(VERIFY){0,1})/g
    },
    
    {
        'name': 'pseudo',
        'pattern': /OP_(PUBKEY((?!\w)|(HASH))|INVALIDOPCODE)/g
    },
    {
        'name': 'reserved',
        'pattern': /OP_(RESERVED((?!\w)|(1|2))|VER((?!\w)|(NOT){0,1}IF(?!\w))|NOP(\d){1,2})/g
    }
], true);