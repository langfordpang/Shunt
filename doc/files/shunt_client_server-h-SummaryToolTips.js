﻿NDSummary.OnToolTipsLoaded("File:shunt_client_server.h",{323:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype323\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">INLINE <span class=\"SHKeyword\">unsigned int</span> shunt_cs_init_initiator(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const unsigned</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">portno_in</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">TCP/IP initiator (server) initialization</div></div>",324:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype324\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">INLINE <span class=\"SHKeyword\">unsigned int</span> shunt_cs_tcp_parent_init_initiator_dpa()</div></div></div>",325:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype325\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">INLINE <span class=\"SHKeyword\">unsigned int</span> shunt_cs_init_target(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const unsigned</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td></td><td class=\"PName last\">portno_in ,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">char</span>&nbsp;</td><td class=\"PSymbols\">*</td><td class=\"PName last\">hostname</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">TCP/IP target (client) initialization</div></div>",326:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype326\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">INLINE shunt_dynamic_port shunt_cs_tcp_parent_init_target_dpa(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">char</span>&nbsp;</td><td class=\"PSymbols\">*</td><td class=\"PName last\">hostname</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",327:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype327\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">INLINE shunt_dynamic_port shunt_cs_update_dynamic_port(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">unsigned</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">parentfd_0</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Update the shunt_dynamic_por structure by the TCP socket.</div></div>",330:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype330\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">INLINE shunt_long_t shunt_cs_data_type_hash(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">shunt_long_t&nbsp;</td><td class=\"PName last\">data_type,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">char</span>*&nbsp;</td><td class=\"PName last\">data_type_names[],</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">last_enum</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">map data_type enum to the corresponding hash</div></div>",331:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype331\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">INLINE <span class=\"SHKeyword\">int</span> shunt_cs_data_type(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">shunt_long_t&nbsp;</td><td class=\"PName last\">hash,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">char</span>*&nbsp;</td><td class=\"PName last\">data_type_names[],</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">last_enum</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">map data_type hash to the corresponding enum</div></div>",332:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype332\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">INLINE <span class=\"SHKeyword\">int</span> shunt_cs_send_header (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">sockid,</td></tr><tr><td class=\"PType first\">cs_header*&nbsp;</td><td class=\"PName last\">h</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">send SHUNT header over TCP/IP</div></div>",333:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype333\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">INLINE <span class=\"SHKeyword\">int</span> shunt_cs_send_data_header (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">sockid,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">n_payloads,</td></tr><tr><td class=\"PType first\">cs_data_header*&nbsp;</td><td class=\"PName last\">h</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">send SHUNT header over TCP/IP</div></div>",334:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype334\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">INLINE <span class=\"SHKeyword\">int</span> shunt_cs_recv_header (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">sockid,</td></tr><tr><td class=\"PType first\">cs_header*&nbsp;</td><td class=\"PName last\">h</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">fetch SHUNT transaction header from TCP/IP socket</div></div>",335:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype335\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">INLINE <span class=\"SHKeyword\">int</span> shunt_cs_recv_data_header (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">sockid,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">n_payloads,</td></tr><tr><td class=\"PType first\">cs_data_header*&nbsp;</td><td class=\"PName last\">h</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">fetch SHUNT transaction header from TCP/IP socket</div></div>",338:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype338\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">INLINE <span class=\"SHKeyword\">int</span> shunt_cs_send_intV (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">sockid,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">cs_header*&nbsp;</td><td class=\"PName last\">header,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">int</span>*&nbsp;</td><td class=\"PName last\">Int</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">send SHUNT transaction with &quot;int&quot; elements vector over TCP/IP</div></div>",339:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype339\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">INLINE <span class=\"SHKeyword\">int</span> shunt_cs_recv_intV (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">sockid,</td></tr><tr><td class=\"PType first\">cs_header*&nbsp;</td><td class=\"PName last\">header,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>*&nbsp;</td><td class=\"PName last\">Int</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">fetch SHUNT transaction with &quot;int&quot; elements vector&nbsp; elements from TCP/IP</div></div>",340:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype340\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">INLINE <span class=\"SHKeyword\">int</span> shunt_cs_send_shortV (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">sockid,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">cs_header*&nbsp;</td><td class=\"PName last\">header,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const short</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">int</span>*&nbsp;</td><td class=\"PName last\">Short</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">send SHUNT transaction with &quot;shortint&quot; elements vector over TCP/IP</div></div>",341:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype341\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">INLINE <span class=\"SHKeyword\">int</span> shunt_cs_recv_shortV (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">sockid,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">cs_header*&nbsp;</td><td class=\"PName last\">header,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">short</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">int</span>*&nbsp;</td><td class=\"PName last\">Short</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">fetch SHUNT transaction with &quot;shortint&quot; elements vector&nbsp; elements from TCP/IP</div></div>",342:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype342\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">INLINE <span class=\"SHKeyword\">int</span> shunt_cs_send_longV (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">sockid,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">cs_header*&nbsp;</td><td class=\"PName last\">header,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">shunt_long_t*&nbsp;</td><td class=\"PName last\">Long</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">send SHUNT transaction with &quot;longint&quot; elements vector over TCP/IP</div></div>",343:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype343\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">INLINE <span class=\"SHKeyword\">int</span> shunt_cs_recv_longV (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">sockid,</td></tr><tr><td class=\"PType first\">cs_header*&nbsp;</td><td class=\"PName last\">header,</td></tr><tr><td class=\"PType first\">shunt_long_t*&nbsp;</td><td class=\"PName last\">Long</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">fetch SHUNT transaction with &quot;longint&quot; elements vector&nbsp; elements from TCP/IP</div></div>",344:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype344\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">INLINE <span class=\"SHKeyword\">int</span> shunt_cs_send_doubleV (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">sockid,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">cs_header*&nbsp;</td><td class=\"PName last\">header,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">double</span>*&nbsp;</td><td class=\"PName last\">Double</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">send SHUNT transaction with &quot;double&quot; elements vector over TCP/IP</div></div>",345:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype345\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">INLINE <span class=\"SHKeyword\">int</span> shunt_cs_recv_doubleV (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">sockid,</td></tr><tr><td class=\"PType first\">cs_header*&nbsp;</td><td class=\"PName last\">header,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">double</span>*&nbsp;</td><td class=\"PName last\">Double</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">fetch SHUNT transaction with &quot;double&quot; elements vector from TCP/IP</div></div>",346:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype346\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">INLINE <span class=\"SHKeyword\">int</span> shunt_cs_send_floatV (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">sockid,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">cs_header*&nbsp;</td><td class=\"PName last\">header,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">float</span>*&nbsp;</td><td class=\"PName last\">Float</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">send SHUNT transaction with &quot;float&quot; elements vector over TCP/IP</div></div>",347:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype347\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">INLINE <span class=\"SHKeyword\">int</span> shunt_cs_recv_floatV (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">sockid,</td></tr><tr><td class=\"PType first\">cs_header*&nbsp;</td><td class=\"PName last\">header,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>*&nbsp;</td><td class=\"PName last\">Float</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">fetch SHUNT transaction with &quot;float&quot; elements vector from TCP/IP</div></div>",348:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype348\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">INLINE <span class=\"SHKeyword\">int</span> shunt_cs_send_byteV (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">sockid,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">cs_header*&nbsp;</td><td class=\"PName last\">header,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">char</span>*&nbsp;</td><td class=\"PName last\">byteV</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">send SHUNT transaction with verilog byteV/string/C char* elements over TCP/IP</div></div>",349:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype349\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">INLINE <span class=\"SHKeyword\">int</span> shunt_cs_recv_byteV (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">sockid,</td></tr><tr><td class=\"PType first\">cs_header*&nbsp;</td><td class=\"PName last\">header,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">char</span>*&nbsp;</td><td class=\"PName last\">byteV</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">fetch SHUNT transaction with verilog byteV/string/C char* elements from TCP/IP</div></div>",350:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype350\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">INLINE <span class=\"SHKeyword\">int</span> shunt_cs_send_bitN (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">sockid,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">cs_header*&nbsp;</td><td class=\"PName last\">h,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">svBitVecVal*&nbsp;</td><td class=\"PName last\">bitN</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">map bit[N:0]&nbsp; 2-state data type packed array of scalar bit types LRM 6.11</div></div>",351:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype351\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">INLINE <span class=\"SHKeyword\">int</span> shunt_cs_recv_bitN (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">sockid,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">cs_header*&nbsp;</td><td class=\"PName last\">h,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">svBitVecVal*&nbsp;</td><td class=\"PName last\">bitN</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">map bit[N:0] 2-state data type packed array of scalar bit types LRM&nbsp; 6.11</div></div>",352:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype352\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">INLINE <span class=\"SHKeyword\">int</span> shunt_cs_send_integerV (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">sockid,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">cs_header*&nbsp;</td><td class=\"PName last\">h,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">svLogicVecVal*&nbsp;</td><td class=\"PName last\">integerV</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">map verilog &quot;reg[31:0] 4 state aval,bval LRM 6.11</div></div>",353:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype353\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">INLINE <span class=\"SHKeyword\">int</span> shunt_cs_recv_integerV (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">sockid,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">cs_header*&nbsp;</td><td class=\"PName last\">h,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">svLogicVecVal*&nbsp;</td><td class=\"PName last\">integerV</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">map verilog &quot;reg[31:0] 4 state aval,bval LRM&nbsp; 6.11</div></div>",354:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype354\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">INLINE <span class=\"SHKeyword\">int</span> shunt_cs_send_regN (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const unsigned</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">sockfd,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">cs_header*&nbsp;</td><td class=\"PName last\">h_trnx,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">svLogicVecVal*&nbsp;</td><td class=\"PName last\">Reg</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">LRM 6.11</div></div>",355:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype355\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">INLINE <span class=\"SHKeyword\">int</span> shunt_cs_recv_regN (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const unsigned</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">sockfd,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">cs_header*&nbsp;</td><td class=\"PName last\">h_trnx,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">svLogicVecVal*&nbsp;</td><td class=\"PName last\">Reg</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">map bit[N:0] 2-state data type packed array of scalar bit types LRM&nbsp; 6.11</div></div>",358:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype358\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">INLINE <span class=\"SHKeyword\">void</span> shunt_cs_print_header (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">cs_header*&nbsp;</td><td></td><td class=\"PName last\">h,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">char</span>*&nbsp;</td><td></td><td class=\"PName last\">data_type_names[],</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td></td><td class=\"PName last\">last_enum,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">char const</span>&nbsp;</td><td class=\"PSymbols\">*</td><td class=\"PName last\">msg</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">print out SHUNT header</div></div>",359:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype359\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">INLINE <span class=\"SHKeyword\">void</span> shunt_cs_print_data_header (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">cs_header*&nbsp;</td><td class=\"PName last\">h,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">cs_data_header*&nbsp;</td><td class=\"PName last\">h_data,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">char</span>*&nbsp;</td><td class=\"PName last\">data_type_names[],</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">last_enum,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">char</span>*&nbsp;</td><td class=\"PName last\">msg</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">print out SHUNT header</div></div>",360:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype360\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">INLINE shunt_long_t shunt_cs_get_cs_header_leader()</div></div><div class=\"TTSummary\">predefined hash functions for obtain the specific hash value.</div></div>",361:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype361\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">INLINE shunt_long_t shunt_cs_get_tlm_header_leader()</div></div><div class=\"TTSummary\">predefined hash functions for obtain the specific hash value.</div></div>",362:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype362\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">INLINE shunt_long_t shunt_cs_get_tlm_data_leader()</div></div><div class=\"TTSummary\">predefined hash functions for obtain the specific hash value.</div></div>",363:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype363\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">INLINE shunt_long_t shunt_cs_get_tlm_axi3_ext_leader()</div></div><div class=\"TTSummary\">predefined hash functions for obtain the specific hash value.</div></div>",364:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype364\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">INLINE shunt_long_t shunt_cs_get_tlm_axi3_signal_leader()</div></div><div class=\"TTSummary\">predefined hash functions for obtain the specific hash value.</div></div>",367:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype367\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">INLINE <span class=\"SHKeyword\">void</span> shunt_cs_tlm_send_gp(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">sockid,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">cs_tlm_generic_payload_header*&nbsp;</td><td class=\"PName last\">h,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const unsigned</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">char</span>*&nbsp;</td><td class=\"PName last\">data,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const unsigned</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">char</span>*&nbsp;</td><td class=\"PName last\">byte_enable</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">send tlm generic payload&nbsp; packet ( cs_tlm_generic_payload_header&nbsp; + byte data vector + byte_enable vector )</div></div>",368:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype368\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">INLINE <span class=\"SHKeyword\">void</span> shunt_cs_tlm_recv_gp_header (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">sockid,</td></tr><tr><td class=\"PType first\">cs_tlm_generic_payload_header*&nbsp;</td><td class=\"PName last\">h</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">recieve tlm generic payload&nbsp; header ( cs_tlm_generic_payload_header only)</div></div>",369:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype369\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">INLINE <span class=\"SHKeyword\">void</span> shunt_cs_tlm_send_gp_header (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">sockid,</td></tr><tr><td class=\"PType first\">cs_tlm_generic_payload_header*&nbsp;</td><td class=\"PName last\">h</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">send tlm generic payload&nbsp; header ( cs_tlm_generic_payload_header only)</div></div>",370:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype370\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">INLINE <span class=\"SHKeyword\">void</span> shunt_cs_tlm_recv_axi3_header (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">sockid,</td></tr><tr><td class=\"PType first\">cs_tlm_axi3_extension_payload_header*&nbsp;</td><td class=\"PName last\">h</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">recieve tlm generic payload&nbsp; header ( cs_tlm_generic_payload_header only)</div></div>",371:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype371\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">INLINE <span class=\"SHKeyword\">void</span> shunt_cs_tlm_send_axi3_header (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">sockid,</td></tr><tr><td class=\"PType first\">cs_tlm_axi3_extension_payload_header*&nbsp;</td><td class=\"PName last\">h</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">send tlm extension&nbsp; header (cs_tlm_axi3_extension_payload_header only)</div></div>",372:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype372\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">INLINE <span class=\"SHKeyword\">void</span> shunt_cs_tlm_recv_gp_data (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">sockid,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">cs_tlm_generic_payload_header*&nbsp;</td><td class=\"PName last\">h,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">shunt_long_t*&nbsp;</td><td class=\"PName last\">data,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">shunt_long_t*&nbsp;</td><td class=\"PName last\">byte_enable</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">recieve tlm generic payload&nbsp; packet (byte data vector + byte_enable vector )</div></div>"});