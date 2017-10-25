NDSummary.OnToolTipsLoaded("File:shunt_primitives.h",{174:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype174\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">double</span> shunt_prim_hash(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">char</span>&nbsp;</td><td class=\"PNamePrefix\">*</td><td class=\"PName last\">str</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">simple hash function</div></div>",175:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype175\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> shunt_prim_error(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">char</span>&nbsp;</td><td class=\"PNamePrefix\">*</td><td class=\"PName last\">msg</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">perror wrapper</div></div>",178:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype178\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">int</span> shunt_prim_init_initiator(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const unsigned</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">portno</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">TCP/IP initiator initialization</div></div>",179:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype179\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">unsigned int</span> shunt_prim_init_target(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const unsigned</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td></td><td class=\"PName last\">portno,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">char</span>&nbsp;</td><td class=\"PNamePrefix\">*</td><td class=\"PName last\">hostname</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">TCP/IP target initialization</div></div>",183:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype183\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">int</span> shunt_prim_send_int (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td></td><td class=\"PName last\">sockfd,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PNamePrefix\">*</td><td class=\"PName last\">Int</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">send verilog/C &quot;int&quot; data over TCP/IP</div></div>",184:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype184\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">int</span> shunt_prim_recv_int (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td></td><td class=\"PName last\">sockfd,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PNamePrefix\">*</td><td class=\"PName last\">Int</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">fetch verilog/C &quot;int&quot; data from TCP/IP socket</div></div>",185:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype185\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">int</span> shunt_prim_send_double (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td></td><td class=\"PName last\">sockfd,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">double</span>&nbsp;</td><td class=\"PNamePrefix\">*</td><td class=\"PName last\">Double</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">send verilog &quot;double&quot; over TCP/IP</div></div>",186:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype186\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">int</span> shunt_prim_recv_double (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td></td><td class=\"PName last\">sockfd,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">double</span>&nbsp;</td><td class=\"PNamePrefix\">*</td><td class=\"PName last\">Double</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">fetch verilog &quot;real&quot;/&quot;shortreal&quot;/&quot;realtime&quot;/C &quot;double&quot;/&quot;float&quot;,&quot;double&quot; from TCP/IP</div></div>",187:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype187\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">int</span> shunt_prim_send_float (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td></td><td class=\"PName last\">sockfd,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PNamePrefix\">*</td><td class=\"PName last\">Float</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">send verilog &quot;real&quot;/&quot;shortreal&quot;/&quot;realtime&quot;/C &quot;double&quot;/&quot;float&quot;,&quot;double&quot; over TCP/IP</div></div>",188:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype188\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">int</span> shunt_prim_recv_float (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td></td><td class=\"PName last\">sockfd,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PNamePrefix\">*</td><td class=\"PName last\">Float</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">fetch verilog &quot;real&quot;/&quot;shortreal&quot;/&quot;realtime&quot;/C &quot;double&quot;/&quot;float&quot;,&quot;double&quot; from TCP/IP</div></div>",189:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype189\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">int</span> shunt_prim_send_short (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td></td><td class=\"PName last\">sockfd,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const short</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PNamePrefix\">*</td><td class=\"PName last\">Short</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">send verilog &quot;shortint&quot;/C &quot;short int&quot; over TCP/IP</div></div>",190:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype190\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">int</span> shunt_prim_recv_short (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td></td><td class=\"PName last\">sockfd,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">short</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PNamePrefix\">*</td><td class=\"PName last\">Short</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">fetch verilog &quot;shortint&quot;/C &quot;short int&quot; over TCP/IP</div></div>",191:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype191\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">int</span> shunt_prim_send_long (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td></td><td class=\"PName last\">sockfd,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const long</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PNamePrefix\">*</td><td class=\"PName last\">Long</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">send verilog &quot;longint&quot;/C &quot;long int&quot; over TCP/IP</div></div>",192:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype192\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">int</span> shunt_prim_recv_long (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td></td><td class=\"PName last\">sockfd,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">long</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PNamePrefix\">*</td><td class=\"PName last\">Long</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">fetch verilog &quot;longint&quot;/C &quot;long int&quot; over TCP/IP</div></div>",193:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype193\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">int</span> shunt_prim_send_byte (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td></td><td class=\"PName last\">sockfd,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">char</span>&nbsp;</td><td class=\"PNamePrefix\">*</td><td class=\"PName last\">Byte</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">send verilog/C &quot;Byte/Char&quot; data over TCP/IP</div></div>",194:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype194\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">int</span> shunt_prim_recv_byte (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td></td><td class=\"PName last\">sockfd,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">char</span>&nbsp;</td><td class=\"PNamePrefix\">*</td><td class=\"PName last\">Byte</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">fetch verilog/C &quot;Byte/Char&quot; data from TCP/IP socket</div></div>",195:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype195\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">int</span> shunt_prim_send_integer(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const unsigned</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td></td><td class=\"PName last\">sockfd,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">svLogicVecVal&nbsp;</td><td class=\"PNamePrefix\">*</td><td class=\"PName last\">Int</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">send&nbsp; verilog &quot;reg[31:0] 4 state aval,bval&quot; over TCP/IP</div></div>",196:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype196\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">int</span> shunt_prim_recv_integer (</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const unsigned</span>&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td></td><td class=\"PName last\">sockfd,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">svLogicVecVal&nbsp;</td><td class=\"PNamePrefix\">*</td><td class=\"PName last\">Int</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">fetch verilog &quot;reg[31:0] 4 state aval,bval&quot; from TCP/IP</div></div>"});