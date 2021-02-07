﻿NDSummary.OnToolTipsLoaded("File:shunt_client_server.h",{298:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype298\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">typedef enum</span> {</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PName first last\">SHUNT_INT,</td></tr><tr><td class=\"PName first last\">SHUNT_REAL,</td></tr><tr><td class=\"PName first last\">SHUNT_SHORTREAL,</td></tr><tr><td class=\"PName first last\">SHUNT_STRING,</td></tr><tr><td class=\"PName first last\">SHUNT_A_STRUCTURE,</td></tr><tr><td class=\"PName first last\">SHUNT_INTEGER,</td></tr><tr><td class=\"PName first last\">SHUNT_BYTE,</td></tr><tr><td class=\"PName first last\">SHUNT_REG,</td></tr><tr><td class=\"PName first last\">SHUNT_BIT,</td></tr><tr><td class=\"PName first last\">SHUNT_SHORTINT,</td></tr><tr><td class=\"PName first last\">SHUNT_LONGINT,</td></tr><tr><td class=\"PName first last\">SHUNT_HEADER_ONLY</td></tr></table></td><td class=\"PAfterParameters\">} SHUNT_INSTR_ENUM</td></tr></table></div></div><div class=\"TTSummary\"><b>Integer 2 states:</b></div></div>",299:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype299\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">#define SHUNT_INSTR_HASH_INDEX_DEFINE <span class=\"SHKeyword\">const char</span>* SHUNT_INSTR_ENUM_NAMES[]</div></div></div>",301:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype301\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">typedef struct</span> cs_data_header_t {</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">long</span>&nbsp;</td><td></td><td class=\"PName last\">data_type;</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PSymbols\">*</td><td class=\"PName last\">trnx_payload_sizes;</td></tr><tr><td class=\"first\"></td><td></td><td class=\"last\"></td></tr></table></td><td class=\"PAfterParameters\">} cs_data_header</td></tr></table></div></div></div>",303:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype303\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">long</span> shunt_cs_data_type_hash(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">long</span>&nbsp;</td><td class=\"PName last\">data_type,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">char</span>*&nbsp;</td><td class=\"PName last\">data_type_names[],</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">last_enum</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">map data_type enum to the corresponding hash</div></div>",304:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype304\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">int</span> shunt_cs_data_type(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">long</span>&nbsp;</td><td class=\"PName last\">hash,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">char</span>*&nbsp;</td><td class=\"PName last\">data_type_names[],</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">last_enum</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">map data_type hash to the corresponding enum</div></div>",305:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype305\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">int</span> shunt_cs_send_header (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">sockid,</td></tr><tr><td class=\"PType first\">cs_header*&nbsp;</td><td class=\"PName last\">h</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">send SHUNT header over TCP/IP</div></div>",306:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype306\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">int</span> shunt_cs_send_data_header (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">sockid,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">n_payloads,</td></tr><tr><td class=\"PType first\">cs_data_header*&nbsp;</td><td class=\"PName last\">h</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">send SHUNT header over TCP/IP</div></div>",307:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype307\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">int</span> shunt_cs_recv_header (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">sockid,</td></tr><tr><td class=\"PType first\">cs_header*&nbsp;</td><td class=\"PName last\">h</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">fetch SHUNT transaction header from TCP/IP socket</div></div>",308:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype308\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">int</span> shunt_cs_recv_data_header (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">sockid,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">n_payloads,</td></tr><tr><td class=\"PType first\">cs_data_header*&nbsp;</td><td class=\"PName last\">h</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">fetch SHUNT transaction header from TCP/IP socket</div></div>",311:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype311\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">int</span> shunt_cs_send_intV (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">sockid,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">cs_header*&nbsp;</td><td class=\"PName last\">header,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">int</span>*&nbsp;</td><td class=\"PName last\">Int</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">send SHUNT transaction with &quot;int&quot; elements vector over TCP/IP</div></div>",312:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype312\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">int</span> shunt_cs_recv_intV (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">sockid,</td></tr><tr><td class=\"PType first\">cs_header*&nbsp;</td><td class=\"PName last\">header,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>*&nbsp;</td><td class=\"PName last\">Int</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">fetch SHUNT transaction with &quot;int&quot; elements vector&nbsp; elements from TCP/IP</div></div>",313:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype313\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">int</span> shunt_cs_send_shortV (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">sockid,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">cs_header*&nbsp;</td><td class=\"PName last\">header,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const short</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">int</span>*&nbsp;</td><td class=\"PName last\">Short</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">send SHUNT transaction with &quot;shortint&quot; elements vector over TCP/IP</div></div>",314:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype314\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">int</span> shunt_cs_recv_shortV (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">sockid,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">cs_header*&nbsp;</td><td class=\"PName last\">header,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">short</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">int</span>*&nbsp;</td><td class=\"PName last\">Short</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">fetch SHUNT transaction with &quot;shortint&quot; elements vector&nbsp; elements from TCP/IP</div></div>",287:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype287\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">int</span> shunt_cs_send_longV (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">sockid,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">cs_header*&nbsp;</td><td class=\"PName last\">header,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">long</span>*&nbsp;</td><td class=\"PName last\">Long</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">send SHUNT transaction with &quot;longint&quot; elements vector over TCP/IP</div></div>",288:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype288\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">int</span> shunt_cs_recv_longV (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">sockid,</td></tr><tr><td class=\"PType first\">cs_header*&nbsp;</td><td class=\"PName last\">header,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">long</span>*&nbsp;</td><td class=\"PName last\">Long</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">fetch SHUNT transaction with &quot;longint&quot; elements vector&nbsp; elements from TCP/IP</div></div>",317:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype317\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">int</span> shunt_cs_send_doubleV (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">sockid,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">cs_header*&nbsp;</td><td class=\"PName last\">header,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">double</span>*&nbsp;</td><td class=\"PName last\">Double</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">send SHUNT transaction with &quot;double&quot; elements vector over TCP/IP</div></div>",318:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype318\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">int</span> shunt_cs_recv_doubleV (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">sockid,</td></tr><tr><td class=\"PType first\">cs_header*&nbsp;</td><td class=\"PName last\">header,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">double</span>*&nbsp;</td><td class=\"PName last\">Double</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">fetch SHUNT transaction with &quot;double&quot; elements vector from TCP/IP</div></div>",319:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype319\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">int</span> shunt_cs_send_floatV (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">sockid,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">cs_header*&nbsp;</td><td class=\"PName last\">header,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">float</span>*&nbsp;</td><td class=\"PName last\">Float</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">send SHUNT transaction with &quot;float&quot; elements vector over TCP/IP</div></div>",320:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype320\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">int</span> shunt_cs_recv_floatV (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">sockid,</td></tr><tr><td class=\"PType first\">cs_header*&nbsp;</td><td class=\"PName last\">header,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>*&nbsp;</td><td class=\"PName last\">Float</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">fetch SHUNT transaction with &quot;float&quot; elements vector from TCP/IP</div></div>",321:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype321\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">int</span> shunt_cs_send_byteV (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">sockid,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">cs_header*&nbsp;</td><td class=\"PName last\">header,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">char</span>*&nbsp;</td><td class=\"PName last\">byteV</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">send SHUNT transaction with verilog byteV/string/C char* elements over TCP/IP</div></div>",322:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype322\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">int</span> shunt_cs_recv_byteV (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">sockid,</td></tr><tr><td class=\"PType first\">cs_header*&nbsp;</td><td class=\"PName last\">header,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">char</span>*&nbsp;</td><td class=\"PName last\">byteV</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">fetch SHUNT transaction with verilog byteV/string/C char* elements from TCP/IP</div></div>",323:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype323\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">int</span> shunt_cs_send_bitN (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">sockid,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">cs_header*&nbsp;</td><td class=\"PName last\">h,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">svBitVecVal*&nbsp;</td><td class=\"PName last\">bitN</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">map bit[N:0]&nbsp; 2-state data type packed array of scalar bit types LRM 6.11</div></div>",324:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype324\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">int</span> shunt_cs_recv_bitN (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">sockid,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">cs_header*&nbsp;</td><td class=\"PName last\">h,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">svBitVecVal*&nbsp;</td><td class=\"PName last\">bitN</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">map bit[N:0] 2-state data type packed array of scalar bit types LRM&nbsp; 6.11</div></div>",325:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype325\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">int</span> shunt_cs_send_integerV (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">sockid,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">cs_header*&nbsp;</td><td class=\"PName last\">h,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">svLogicVecVal*&nbsp;</td><td class=\"PName last\">integerV</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">map verilog &quot;reg[31:0] 4 state aval,bval LRM 6.11</div></div>",326:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype326\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">int</span> shunt_cs_recv_integerV (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">sockid,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">cs_header*&nbsp;</td><td class=\"PName last\">h,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">svLogicVecVal*&nbsp;</td><td class=\"PName last\">integerV</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">map verilog &quot;reg[31:0] 4 state aval,bval LRM&nbsp; 6.11</div></div>",327:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype327\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">int</span> shunt_cs_send_regN (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const unsigned</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">sockfd,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">cs_header*&nbsp;</td><td class=\"PName last\">h_trnx,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">svLogicVecVal*&nbsp;</td><td class=\"PName last\">Reg</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">LRM 6.11</div></div>",328:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype328\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">int</span> shunt_cs_recv_regN (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const unsigned</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">sockfd,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">cs_header*&nbsp;</td><td class=\"PName last\">h_trnx,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">svLogicVecVal*&nbsp;</td><td class=\"PName last\">Reg</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">map bit[N:0] 2-state data type packed array of scalar bit types LRM&nbsp; 6.11</div></div>",331:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype331\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> shunt_cs_print_header (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">cs_header*&nbsp;</td><td class=\"PName last\">h,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">char</span>*&nbsp;</td><td class=\"PName last\">data_type_names[],</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">last_enum,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">char</span>*&nbsp;</td><td class=\"PName last\">msg</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">print out SHUNT header</div></div>",332:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype332\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> shunt_cs_print_data_header (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">cs_header*&nbsp;</td><td class=\"PName last\">h,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">cs_data_header*&nbsp;</td><td class=\"PName last\">h_data,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">char</span>*&nbsp;</td><td class=\"PName last\">data_type_names[],</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">last_enum,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">char</span>*&nbsp;</td><td class=\"PName last\">msg</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">print out SHUNT header</div></div>",356:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype356\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">long</span> shunt_cs_get_cs_header_leader()</div></div><div class=\"TTSummary\">predefined hash functions for obtain the specific hash value.</div></div>",357:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype357\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">long</span> shunt_cs_get_tlm_header_leader()</div></div><div class=\"TTSummary\">predefined hash functions for obtain the specific hash value.</div></div>",358:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype358\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">long</span> shunt_cs_get_tlm_data_leader()</div></div><div class=\"TTSummary\">predefined hash functions for obtain the specific hash value.</div></div>",359:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype359\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">long</span> shunt_cs_get_tlm_axi3_ext_leader()</div></div><div class=\"TTSummary\">predefined hash functions for obtain the specific hash value.</div></div>",360:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype360\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">long</span> shunt_cs_get_tlm_axi3_signal_leader()</div></div><div class=\"TTSummary\">predefined hash functions for obtain the specific hash value.</div></div>",335:"<div class=\"NDToolTip TVariable LC\"><div class=\"TTSummary\"><b>TLM 2.0 Generic Payload structure</b> (Ref. to TLM 2.0 Generic Payload attributes)</div></div>",336:"<div class=\"NDToolTip TVariable LC\"><div class=\"TTSummary\"><b>TLM 2.0&nbsp; ARM AXI3 signals extension structure</b>&nbsp; REF to Copyright 2003, 2004, 2010, 2011 ARM. All rights reserved.ARM IHI 0022D (ID102711)</div></div>",338:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype338\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> shunt_cs_tlm_send_gp(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">sockid,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">cs_tlm_generic_payload_header*&nbsp;</td><td class=\"PName last\">h,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const unsigned</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">char</span>*&nbsp;</td><td class=\"PName last\">data,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const unsigned</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">char</span>*&nbsp;</td><td class=\"PName last\">byte_enable</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">send tlm generic payload&nbsp; packet ( cs_tlm_generic_payload_header&nbsp; + byte data vector + byte_enable vector )</div></div>",339:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype339\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> shunt_cs_tlm_recv_gp_header (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">sockid,</td></tr><tr><td class=\"PType first\">cs_tlm_generic_payload_header*&nbsp;</td><td class=\"PName last\">h</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">recieve tlm generic payload&nbsp; header ( cs_tlm_generic_payload_header only)</div></div>",340:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype340\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> shunt_cs_tlm_send_gp_header (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">sockid,</td></tr><tr><td class=\"PType first\">cs_tlm_generic_payload_header*&nbsp;</td><td class=\"PName last\">h</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">send tlm generic payload&nbsp; header ( cs_tlm_generic_payload_header only)</div></div>",341:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype341\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> shunt_cs_tlm_recv_axi3_header (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">sockid,</td></tr><tr><td class=\"PType first\">cs_tlm_axi3_extension_payload_header*&nbsp;</td><td class=\"PName last\">h</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">recieve tlm generic payload&nbsp; header ( cs_tlm_generic_payload_header only)</div></div>",342:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype342\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> shunt_cs_tlm_send_axi3_header (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">sockid,</td></tr><tr><td class=\"PType first\">cs_tlm_axi3_extension_payload_header*&nbsp;</td><td class=\"PName last\">h</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">send tlm extension&nbsp; header (cs_tlm_axi3_extension_payload_header only)</div></div>",343:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype343\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> shunt_cs_tlm_recv_gp_data (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">sockid,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">cs_tlm_generic_payload_header*&nbsp;</td><td class=\"PName last\">h,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">unsigned</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">long</span>*&nbsp;</td><td class=\"PName last\">data,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">unsigned</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">long</span>*&nbsp;</td><td class=\"PName last\">byte_enable</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">recieve tlm generic payload&nbsp; packet (byte data vector + byte_enable vector )</div></div>"});