this.webpackChunk([1,2],[,,,function(t,e,n){"use strict";(function(t,r){n.d(e,"a",(function(){return j})),n.d(e,"b",(function(){return O})),n.d(e,"c",(function(){return z})),n.d(e,"d",(function(){return E})),n.d(e,"e",(function(){return T})),n.d(e,"f",(function(){return A})),n.d(e,"g",(function(){return C})),n.d(e,"l",(function(){return F})),n.d(e,"x",(function(){return D})),n.d(e,"w",(function(){return P})),n.d(e,"E",(function(){return q})),n.d(e,"C",(function(){return G})),n.d(e,"v",(function(){return I})),n.d(e,"J",(function(){return U})),n.d(e,"p",(function(){return B})),n.d(e,"j",(function(){return M})),n.d(e,"q",(function(){return R})),n.d(e,"i",(function(){return S})),n.d(e,"I",(function(){return L})),n.d(e,"t",(function(){return H})),n.d(e,"y",(function(){return J})),n.d(e,"D",(function(){return K})),n.d(e,"m",(function(){return N})),n.d(e,"n",(function(){return V})),n.d(e,"G",(function(){return W})),n.d(e,"h",(function(){return Q})),n.d(e,"o",(function(){return X})),n.d(e,"s",(function(){return Y})),n.d(e,"z",(function(){return Z})),n.d(e,"u",(function(){return $})),n.d(e,"B",(function(){return tt})),n.d(e,"r",(function(){return et})),n.d(e,"A",(function(){return nt})),n.d(e,"k",(function(){return rt})),n.d(e,"F",(function(){return _t})),n.d(e,"K",(function(){return it})),n.d(e,"H",(function(){return ut}));var _=n(7),i=n(8),u=n(4),o=new Array(32).fill(void 0);function s(t){return o[t]}o.push(void 0,null,!0,!1);var a=o.length;function c(t){var e=s(t);return function(t){t<36||(o[t]=a,a=t)}(t),e}function f(t){a===o.length&&o.push(o.length+1);var e=a;return a=o[e],o[e]=t,e}var l=new("undefined"===typeof TextDecoder?(0,t.require)("util").TextDecoder:TextDecoder)("utf-8",{ignoreBOM:!0,fatal:!0});l.decode();var g=null;function d(){return null!==g&&g.buffer===u.memory.buffer||(g=new Uint8Array(u.memory.buffer)),g}function y(t,e){return l.decode(d().subarray(t,t+e))}function p(t,e){if(!(t instanceof e))throw new Error("expected instance of ".concat(e.name));return t.ptr}var w=null;function b(){return null!==w&&w.buffer===u.memory.buffer||(w=new Int32Array(u.memory.buffer)),w}function m(t,e){try{return t.apply(this,e)}catch(n){u.__wbindgen_exn_store(f(n))}}function h(t,e){return d().subarray(t/1,t/1+e)}var v=0,k=new("undefined"===typeof TextEncoder?(0,t.require)("util").TextEncoder:TextEncoder)("utf-8"),x="function"===typeof k.encodeInto?function(t,e){return k.encodeInto(t,e)}:function(t,e){var n=k.encode(t);return e.set(n),{read:t.length,written:n.length}};var j=function(){function t(){Object(_.a)(this,t)}return Object(i.a)(t,[{key:"__destroy_into_raw",value:function(){var t=this.ptr;return this.ptr=0,t}},{key:"free",value:function(){var t=this.__destroy_into_raw();u.__wbg_bitgrid_free(t)}}]),t}(),O=function(){function t(){Object(_.a)(this,t)}return Object(i.a)(t,[{key:"__destroy_into_raw",value:function(){var t=this.ptr;return this.ptr=0,t}},{key:"free",value:function(){var t=this.__destroy_into_raw();u.__wbg_fitnessweights_free(t)}},{key:"num_toggled_cells",get:function(){return u.__wbg_get_fitnessweights_num_toggled_cells(this.ptr)},set:function(t){u.__wbg_set_fitnessweights_num_toggled_cells(this.ptr,t)}},{key:"num_toggled_steps",get:function(){return u.__wbg_get_fitnessweights_num_toggled_steps(this.ptr)},set:function(t){u.__wbg_set_fitnessweights_num_toggled_steps(this.ptr,t)}},{key:"max_alive_cells",get:function(){return u.__wbg_get_fitnessweights_max_alive_cells(this.ptr)},set:function(t){u.__wbg_set_fitnessweights_max_alive_cells(this.ptr,t)}},{key:"max_alive_steps",get:function(){return u.__wbg_get_fitnessweights_max_alive_steps(this.ptr)},set:function(t){u.__wbg_set_fitnessweights_max_alive_steps(this.ptr,t)}},{key:"num_start_cells",get:function(){return u.__wbg_get_fitnessweights_num_start_cells(this.ptr)},set:function(t){u.__wbg_set_fitnessweights_num_start_cells(this.ptr,t)}}],[{key:"__wrap",value:function(e){var n=Object.create(t.prototype);return n.ptr=e,n}},{key:"new",value:function(){var e=u.fitnessweights_new();return t.__wrap(e)}}]),t}(),z=function(){function t(e,n,r){Object(_.a)(this,t);var i=u.gameoflife_new(e,n,r);return t.__wrap(i)}return Object(i.a)(t,[{key:"__destroy_into_raw",value:function(){var t=this.ptr;return this.ptr=0,t}},{key:"free",value:function(){var t=this.__destroy_into_raw();u.__wbg_gameoflife_free(t)}},{key:"width",value:function(){return u.gameoflife_width(this.ptr)>>>0}},{key:"height",value:function(){return u.gameoflife_height(this.ptr)>>>0}},{key:"num_cells",value:function(){return u.gameoflife_num_cells(this.ptr)>>>0}},{key:"num_steps",value:function(){return u.gameoflife_num_steps(this.ptr)>>>0}},{key:"reset",value:function(){u.gameoflife_reset(this.ptr)}},{key:"step",value:function(){u.gameoflife_step(this.ptr)}},{key:"get",value:function(t,e){return 0!==u.gameoflife_get(this.ptr,t,e)}},{key:"clear",value:function(t,e){u.gameoflife_clear(this.ptr,t,e)}},{key:"set",value:function(t,e){u.gameoflife_set(this.ptr,t,e)}}],[{key:"__wrap",value:function(e){var n=Object.create(t.prototype);return n.ptr=e,n}}]),t}(),E=function(){function t(e,n){Object(_.a)(this,t);var r=u.gameofliferunner_new(e,n);return t.__wrap(r)}return Object(i.a)(t,[{key:"__destroy_into_raw",value:function(){var t=this.ptr;return this.ptr=0,t}},{key:"free",value:function(){var t=this.__destroy_into_raw();u.__wbg_gameofliferunner_free(t)}},{key:"run",value:function(t){p(t,z);var e=u.gameofliferunner_run(this.ptr,t.ptr);return C.__wrap(e)}}],[{key:"__wrap",value:function(e){var n=Object.create(t.prototype);return n.ptr=e,n}}]),t}(),T=function(){function t(){Object(_.a)(this,t);var e=u.myeasettings_new();return t.__wrap(e)}return Object(i.a)(t,[{key:"__destroy_into_raw",value:function(){var t=this.ptr;return this.ptr=0,t}},{key:"free",value:function(){var t=this.__destroy_into_raw();u.__wbg_myeasettings_free(t)}},{key:"set_garden_size",value:function(e){var n=this.__destroy_into_raw(),r=u.myeasettings_set_garden_size(n,e);return t.__wrap(r)}},{key:"garden_size",value:function(){return u.myeasettings_garden_size(this.ptr)>>>0}},{key:"set_border",value:function(e){var n=this.__destroy_into_raw(),r=u.myeasettings_set_border(n,e);return t.__wrap(r)}},{key:"border_wraps",value:function(){return 0!==u.myeasettings_border_wraps(this.ptr)}},{key:"set_fw_num_toggled_cells",value:function(e){var n=this.__destroy_into_raw(),r=u.myeasettings_set_fw_num_toggled_cells(n,e);return t.__wrap(r)}},{key:"set_fw_num_toggled_steps",value:function(e){var n=this.__destroy_into_raw(),r=u.myeasettings_set_fw_num_toggled_steps(n,e);return t.__wrap(r)}},{key:"set_fw_max_alive_cells",value:function(e){var n=this.__destroy_into_raw(),r=u.myeasettings_set_fw_max_alive_cells(n,e);return t.__wrap(r)}},{key:"set_fw_max_alive_steps",value:function(e){var n=this.__destroy_into_raw(),r=u.myeasettings_set_fw_max_alive_steps(n,e);return t.__wrap(r)}},{key:"set_fw_num_start_cells",value:function(e){var n=this.__destroy_into_raw(),r=u.myeasettings_set_fw_num_start_cells(n,e);return t.__wrap(r)}},{key:"set_mutation_rate",value:function(e){var n=this.__destroy_into_raw(),r=u.myeasettings_set_mutation_rate(n,e);return t.__wrap(r)}},{key:"mutation_rate",value:function(){return u.myeasettings_mutation_rate(this.ptr)}},{key:"set_recombination_rate",value:function(e){var n=this.__destroy_into_raw(),r=u.myeasettings_set_recombination_rate(n,e);return t.__wrap(r)}},{key:"recombination_rate",value:function(){return u.myeasettings_recombination_rate(this.ptr)}},{key:"set_population_size",value:function(e){var n=this.__destroy_into_raw(),r=u.myeasettings_set_population_size(n,e);return t.__wrap(r)}},{key:"population_size",value:function(){return u.myeasettings_population_size(this.ptr)>>>0}},{key:"set_tournament_size",value:function(e){var n=this.__destroy_into_raw(),r=u.myeasettings_set_tournament_size(n,e);return t.__wrap(r)}},{key:"tournament_size",value:function(){return u.myeasettings_tournament_size(this.ptr)>>>0}},{key:"set_elitism",value:function(e){var n=this.__destroy_into_raw(),r=u.myeasettings_set_elitism(n,e);return t.__wrap(r)}},{key:"elitism",value:function(){return 0!==u.myeasettings_elitism(this.ptr)}}],[{key:"__wrap",value:function(e){var n=Object.create(t.prototype);return n.ptr=e,n}}]),t}(),A=function(){function t(e){Object(_.a)(this,t),p(e,T);var n=u.myevolutionaryalgorithm_new(e.ptr);return t.__wrap(n)}return Object(i.a)(t,[{key:"__destroy_into_raw",value:function(){var t=this.ptr;return this.ptr=0,t}},{key:"free",value:function(){var t=this.__destroy_into_raw();u.__wbg_myevolutionaryalgorithm_free(t)}},{key:"reset",value:function(t){p(t,T),u.myevolutionaryalgorithm_reset(this.ptr,t.ptr)}},{key:"step",value:function(){u.myevolutionaryalgorithm_step(this.ptr)}},{key:"num_generations",value:function(){return u.myevolutionaryalgorithm_num_generations(this.ptr)>>>0}},{key:"num_evaluations",value:function(){return u.myevolutionaryalgorithm_num_evaluations(this.ptr)>>>0}},{key:"evaluation_delta",value:function(){return u.myevolutionaryalgorithm_evaluation_delta(this.ptr)>>>0}},{key:"num_ca_steps",value:function(){return u.myevolutionaryalgorithm_num_ca_steps(this.ptr)>>>0}},{key:"ca_steps_delta",value:function(){return u.myevolutionaryalgorithm_ca_steps_delta(this.ptr)>>>0}},{key:"max_fitness",value:function(){return u.myevolutionaryalgorithm_max_fitness(this.ptr)}},{key:"avg_fitness",value:function(){return u.myevolutionaryalgorithm_avg_fitness(this.ptr)}},{key:"best_phenotype",value:function(){try{var t=u.__wbindgen_add_to_stack_pointer(-16);u.myevolutionaryalgorithm_best_phenotype(t,this.ptr);var e=b()[t/4+0],n=b()[t/4+1];return y(e,n)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_free(e,n)}}},{key:"best_genotype",value:function(){try{var t=u.__wbindgen_add_to_stack_pointer(-16);u.myevolutionaryalgorithm_best_genotype(t,this.ptr);var e=b()[t/4+0],n=b()[t/4+1];return y(e,n)}finally{u.__wbindgen_add_to_stack_pointer(16),u.__wbindgen_free(e,n)}}},{key:"gene_distribution",value:function(){return u.myevolutionaryalgorithm_gene_distribution(this.ptr)}},{key:"genotype_len",value:function(){return u.myevolutionaryalgorithm_genotype_len(this.ptr)>>>0}},{key:"cell_distribution",value:function(){return u.myevolutionaryalgorithm_cell_distribution(this.ptr)}},{key:"phenotype_len",value:function(){return u.myevolutionaryalgorithm_phenotype_len(this.ptr)>>>0}}],[{key:"__wrap",value:function(e){var n=Object.create(t.prototype);return n.ptr=e,n}}]),t}(),C=function(){function t(){Object(_.a)(this,t)}return Object(i.a)(t,[{key:"__destroy_into_raw",value:function(){var t=this.ptr;return this.ptr=0,t}},{key:"free",value:function(){var t=this.__destroy_into_raw();u.__wbg_runstats_free(t)}},{key:"ini_cells",get:function(){return u.__wbg_get_runstats_ini_cells(this.ptr)},set:function(t){u.__wbg_set_runstats_ini_cells(this.ptr,t)}},{key:"max_cells",get:function(){return u.__wbg_get_runstats_max_cells(this.ptr)},set:function(t){u.__wbg_set_runstats_max_cells(this.ptr,t)}},{key:"max_cells_steps",get:function(){return u.__wbg_get_runstats_max_cells_steps(this.ptr)>>>0},set:function(t){u.__wbg_set_runstats_max_cells_steps(this.ptr,t)}},{key:"num_toggled",get:function(){return u.__wbg_get_runstats_num_toggled(this.ptr)},set:function(t){u.__wbg_set_runstats_num_toggled(this.ptr,t)}},{key:"num_toggled_steps",get:function(){return u.__wbg_get_runstats_num_toggled_steps(this.ptr)>>>0},set:function(t){u.__wbg_set_runstats_num_toggled_steps(this.ptr,t)}},{key:"min_cells_after_max",get:function(){return u.__wbg_get_runstats_min_cells_after_max(this.ptr)},set:function(t){u.__wbg_set_runstats_min_cells_after_max(this.ptr,t)}},{key:"min_cells_after_max_steps",get:function(){return u.__wbg_get_runstats_min_cells_after_max_steps(this.ptr)>>>0},set:function(t){u.__wbg_set_runstats_min_cells_after_max_steps(this.ptr,t)}},{key:"num_steps",get:function(){return u.__wbg_get_runstats_num_steps(this.ptr)>>>0},set:function(t){u.__wbg_set_runstats_num_steps(this.ptr,t)}}],[{key:"__wrap",value:function(e){var n=Object.create(t.prototype);return n.ptr=e,n}}]),t}();function F(){return m((function(t,e){s(t).getRandomValues(s(e))}),arguments)}function D(){return m((function(t,e,n){s(t).randomFillSync(h(e,n))}),arguments)}function P(t){return f(s(t).process)}function q(t){var e=s(t);return"object"===typeof e&&null!==e}function G(t){return f(s(t).versions)}function I(t){return f(s(t).node)}function U(t){c(t)}function B(){return m((function(t,e){return f(n(9)(y(t,e)))}),arguments)}function M(t){return f(s(t).crypto)}function R(t){return f(s(t).msCrypto)}function S(){return m((function(t,e){return f(s(t).call(s(e)))}),arguments)}function L(t){return f(s(t))}function H(t,e){return f(new Function(y(t,e)))}function J(){return m((function(){return f(self.self)}),arguments)}function K(){return m((function(){return f(window.window)}),arguments)}function N(){return m((function(){return f(globalThis.globalThis)}),arguments)}function V(){return m((function(){return f(r.global)}),arguments)}function W(t){return void 0===s(t)}function Q(t){return f(s(t).buffer)}function X(t){return s(t).length}function Y(t){return f(new Uint8Array(s(t)))}function Z(t,e,n){s(t).set(s(e),n>>>0)}function $(t){return f(new Uint8Array(t>>>0))}function tt(t,e,n){return f(s(t).subarray(e>>>0,n>>>0))}function et(){return f(new Error)}function nt(t,e){var n=function(t,e,n){if(void 0===n){var r=k.encode(t),_=e(r.length);return d().subarray(_,_+r.length).set(r),v=r.length,_}for(var i=t.length,u=e(i),o=d(),s=0;s<i;s++){var a=t.charCodeAt(s);if(a>127)break;o[u+s]=a}if(s!==i){0!==s&&(t=t.slice(s)),u=n(u,i,i=s+3*t.length);var c=d().subarray(u+s,u+i);s+=x(t,c).written}return v=s,u}(s(e).stack,u.__wbindgen_malloc,u.__wbindgen_realloc),r=v;b()[t/4+1]=r,b()[t/4+0]=n}function rt(t,e){try{console.error(y(t,e))}finally{u.__wbindgen_free(t,e)}}function _t(t){return"string"===typeof s(t)}function it(t,e){throw new Error(y(t,e))}function ut(){return f(u.memory)}}).call(this,n(5)(t),n(6))},function(t,e,n){"use strict";var r=n.w[t.i];for(var _ in n.r(e),r)"__webpack_init__"!=_&&(e[_]=r[_]);n(3);r.__webpack_init__()},function(t,e){t.exports=function(t){if(!t.webpackPolyfill){var e=Object.create(t);e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),Object.defineProperty(e,"exports",{enumerable:!0}),e.webpackPolyfill=1}return e}},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",(function(){return _}))},function(t,e){function n(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=9},function(t,e,n){"use strict";n.r(e);var r=n(3);n.d(e,"BitGrid",(function(){return r.a})),n.d(e,"FitnessWeights",(function(){return r.b})),n.d(e,"GameOfLife",(function(){return r.c})),n.d(e,"GameOfLifeRunner",(function(){return r.d})),n.d(e,"MyEaSettings",(function(){return r.e})),n.d(e,"MyEvolutionaryAlgorithm",(function(){return r.f})),n.d(e,"RunStats",(function(){return r.g})),n.d(e,"__wbg_getRandomValues_98117e9a7e993920",(function(){return r.l})),n.d(e,"__wbg_randomFillSync_64cc7d048f228ca8",(function(){return r.x})),n.d(e,"__wbg_process_2f24d6544ea7b200",(function(){return r.w})),n.d(e,"__wbindgen_is_object",(function(){return r.E})),n.d(e,"__wbg_versions_6164651e75405d4a",(function(){return r.C})),n.d(e,"__wbg_node_4b517d861cbcb3bc",(function(){return r.v})),n.d(e,"__wbindgen_object_drop_ref",(function(){return r.J})),n.d(e,"__wbg_modulerequire_3440a4bcf44437db",(function(){return r.p})),n.d(e,"__wbg_crypto_98fc271021c7d2ad",(function(){return r.j})),n.d(e,"__wbg_msCrypto_a2cdb043d2bfe57f",(function(){return r.q})),n.d(e,"__wbg_call_ba36642bd901572b",(function(){return r.i})),n.d(e,"__wbindgen_object_clone_ref",(function(){return r.I})),n.d(e,"__wbg_newnoargs_9fdd8f3961dd1bee",(function(){return r.t})),n.d(e,"__wbg_self_bb69a836a72ec6e9",(function(){return r.y})),n.d(e,"__wbg_window_3304fc4b414c9693",(function(){return r.D})),n.d(e,"__wbg_globalThis_e0d21cabc6630763",(function(){return r.m})),n.d(e,"__wbg_global_8463719227271676",(function(){return r.n})),n.d(e,"__wbindgen_is_undefined",(function(){return r.G})),n.d(e,"__wbg_buffer_9e184d6f785de5ed",(function(){return r.h})),n.d(e,"__wbg_length_2d56cb37075fcfb1",(function(){return r.o})),n.d(e,"__wbg_new_e8101319e4cf95fc",(function(){return r.s})),n.d(e,"__wbg_set_e8ae7b27314e8b98",(function(){return r.z})),n.d(e,"__wbg_newwithlength_a8d1dbcbe703a5c6",(function(){return r.u})),n.d(e,"__wbg_subarray_901ede8318da52a6",(function(){return r.B})),n.d(e,"__wbg_new_59cb74e423758ede",(function(){return r.r})),n.d(e,"__wbg_stack_558ba5917b466edd",(function(){return r.A})),n.d(e,"__wbg_error_4bb6c2a97407129a",(function(){return r.k})),n.d(e,"__wbindgen_is_string",(function(){return r.F})),n.d(e,"__wbindgen_throw",(function(){return r.K})),n.d(e,"__wbindgen_memory",(function(){return r.H}))}]);
//# sourceMappingURL=1.6ef04a475d022aeeecdb.worker.js.map